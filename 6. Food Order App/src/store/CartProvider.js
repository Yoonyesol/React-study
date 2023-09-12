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
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex]; //장바구니에 존재하는 item
    const updatedTotalAmount = state.totalAmount - existingItem.price; //item 가격만큼 총 가격 내리기

    let updatedItems;
    if (existingItem.amount === 1) {
      //수량이 1개 남았을 경우 remove를 하면 장바구니에서 해당 항목 완전삭제
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      //수량이 2개 이상 남았을 경우 총 수량에서 1개 빼기
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items]; //기존 아이템 복사
      updatedItems[existingCartItemIndex] = updatedItem; //기존 아이템 복사본에서 장바구니 항목의 내용만 업데이트한 내용으로 대체하기
    }
    return {
      items: updatedItems, //장바구니 내용만 변경된 복사본을 전달
      totalAmount: updatedTotalAmount, //총 가격 업데이트
    };
  }
  if (action.type === "CLEAR") {
    return defaultCartState;
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

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
