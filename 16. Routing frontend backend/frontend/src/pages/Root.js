import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  //const events = useLoaderData(); 나보다 깊은 수준의 loader가 리턴해주는 값은 상위에서 꺼내쓸 수 없다.
  //const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet /> {/* 자녀 라우트 콘텐츠를 렌더링할 곳을 정의 */}
      </main>
    </>
  );
}
export default RootLayout;
