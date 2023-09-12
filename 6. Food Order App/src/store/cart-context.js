import React from "react";

const CartContext = React.createContext({
  //컨텍스트 생성
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
