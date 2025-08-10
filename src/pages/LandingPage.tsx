import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LoginButton from "@/components/LoginButton";
import MascotImage from "@/components/MascotImage";
// import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  // const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center grow-1 px-4 bg-blue-50">
        <HeroSection />
        <MascotImage />
        <LoginButton
          className="max-w-[480px]"
          onClick={() => {
            window.location.href = "https://thinkboo.duckdns.org/oauth/kakao/login";
          }}
        />
      </main>
    </>
  );
};

export default LandingPage;
