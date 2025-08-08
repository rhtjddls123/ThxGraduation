import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col max-w-[800px] mx-auto">
      <Outlet />
    </div>
  );
};

export default RootLayout;
