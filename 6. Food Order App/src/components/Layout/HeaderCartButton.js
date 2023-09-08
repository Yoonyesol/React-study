import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const carCtx = useContext(CartContext);

  //reduce: 데이터 배열을 값 하나로 변환해 주는 메소드(함수, 초기값)
  const numberOfCarItems = carCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCarItems}</span>
    </button>
  );
};
export default HeaderCartButton;
