import BannerSection from "@/components/BannerSection";
import Header from "@/components/Header";
import MessageForm from "@/components/MessageForm";
import { useState } from "react";

const MainPage = () => {
  const [messages, setMessages] = useState([
    {
      name: "박준호",
      date: "2024-03-15 15:20",
      message: "4년 동안 정말 수고했어요! 새로운 시작을 응원합니다."
    },
    {
      name: "이수연",
      date: "2024-03-15 16:10",
      message: "드디어 졸업이네요! 앞으로 더 멋진 모습 기대할게요."
    }
  ]);
  const addMessage = (name: string, message: string) => {
    setMessages([{ name, date: new Date().toLocaleString(), message }, ...messages]);
  };

  return (
    <>
      <Header />
      <BannerSection />
      <main className="flex flex-col md:flex-row items-center gap-8 justify-center py-8 px-4 bg-blue-50 flex-1 ">
        <MessageForm onSubmit={addMessage} />
      </main>
    </>
  );
};

export default MainPage;
