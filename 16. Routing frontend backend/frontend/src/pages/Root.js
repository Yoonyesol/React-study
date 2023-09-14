import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet /> {/* 자녀 라우트 콘텐츠를 렌더링할 곳을 정의 */}
      </main>
    </>
  );
}
export default RootLayout;
