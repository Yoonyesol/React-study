//car-context 데이터를 관리하고, 그 context를 접근하려는 모든 컴포넌트에 제공하는 역할
//컨텍스트 데이터를 관리하는 로직을 모두 이 컴포넌트에 추가할 수 있다.
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //항목이 이미 장바구니에 들어있는지 확인하는 로직
    //장바구니에 동일한 id를 가진 item이 들어있으면, 해당 item의 인덱스를 저장
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    //인덱스를 이용해 장바구니에 있는 동일한 item을 저장. 해당 항목이 없다면 null이 저장될 것임
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    //existingCartItem이 존재한다면
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount, //기존 수량에 새로 들어온 수량을 더한다
      };
      updatedItems = [...state.items]; //기존 항목 복사한 배열
      updatedItems[existingCartItemIndex] = updatedItem; //기존 항목을 대체
    } else {
      //existingCartItem이 존재하지 않는다면
      updatedItems = state.items.concat(action.item); //기존처럼 계속 아래에 배열을 추가
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  ); //(리듀서함수, 초기상태)

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item }); //item: ADD를 통해 얻을 것으로 기대되는 item
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
