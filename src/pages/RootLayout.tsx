import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col max-w-[800px] mx-auto">
      <Outlet />
    </div>
  );
};

export default RootLayout;
