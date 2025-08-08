import BannerSection from "@/components/BannerSection";
import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";
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
      <main className="grid grid-cols-1 px-7 bg-blue-50 pb-8">
        <MessageForm onSubmit={addMessage} />
      </main>
      <LinkButton />
    </>
  );
};

export default MainPage;
