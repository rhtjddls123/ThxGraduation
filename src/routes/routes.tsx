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
      { path: "/:uuid", element: <MainPage /> }
    ]
  }
]);

export default router;
