import KakaoLoginPage from "@/pages/KakaoLoginPage";
import LandingPage from "@/pages/LandingPage";
import MainPage from "@/pages/MainPage";
import RootLayout from "@/pages/RootLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      { path: "/:uuid", element: <MainPage /> },
      {
        path: "/login/kakao",
        element: <KakaoLoginPage />
      }
    ]
  }
]);

export default router;
