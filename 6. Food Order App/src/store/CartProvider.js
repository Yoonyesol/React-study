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
    const updatedItems = state.items.concat(action.item); //배열 뒤에 다른 아이템을 붙여 새로운 배열을 반환(push: 기존 배열 자체가 변한다)
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
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
