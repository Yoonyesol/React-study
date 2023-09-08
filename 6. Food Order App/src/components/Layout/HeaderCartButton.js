import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, SetBtnIsHighlighted] = useState(false);

  const carCtx = useContext(CartContext);

  //객체 디스트럭처링, item변수 하나만 저장
  const { items } = carCtx;

  //reduce: 데이터 배열을 값 하나로 변환해 주는 메소드(함수, 초기값)
  const numberOfCarItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  //btnIsHighlighted가 true일 때만 애니메이션 효과가 나타남
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  //items 항목이 변할 때마다 애니메이션 css 추가
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    SetBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      SetBtnIsHighlighted(false);
    }, 300); //애니메이션 지속시간 뒤에, 애니메이션 효과 끄기(꺼야 켤 때 애니메이션 나타남)

    return () => {
      clearTimeout(timer); //타이머가 만료되기 전 다시 설정되는 상황을 대비해 타이머 초기화
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCarItems}</span>
    </button>
  );
};
export default HeaderCartButton;
