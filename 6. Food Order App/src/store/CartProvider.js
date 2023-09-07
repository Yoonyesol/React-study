//car-context 데이터를 관리하고, 그 context를 접근하려는 모든 컴포넌트에 제공하는 역할
//컨텍스트 데이터를 관리하는 로직을 모두 이 컴포넌트에 추가할 수 있다.
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemToCartHandler = (item) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
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
