import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart); //cart 리덕스 스토어 구독
  const notification = useSelector((state) => state.ui.notification);

  // useEffect(() => {
  //   dispatch(fetchCartData());
  // }, [dispatch]);

  useEffect(() => {
    //처음 로드할 때는 장바구니에 데이터 전송을 요청하지 않는다.
    //처음 창을 로드할 때는 notification이 등장하지 않는다.
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]); //구독한 cart의 상태가 바뀔 때마다 함수 실행

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
