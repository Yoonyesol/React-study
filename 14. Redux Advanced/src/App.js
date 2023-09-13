import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart); //cart 리덕스 스토어 구독

  useEffect(() => {
    fetch(
      "https://react-http-f5d7d-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      {
        method: "PUT", //기존 데이터 오버라이드
        body: JSON.stringify(cart),
      }
    );
  }, [cart]); //구독한 cart의 상태가 바뀔 때마다 함수 실행

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
