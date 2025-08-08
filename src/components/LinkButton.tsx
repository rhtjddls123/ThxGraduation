import { LinkIcon } from "lucide-react";

const LinkButton = () => {
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("현재 페이지 주소가 복사되었습니다!");
    } catch {
      alert("복사에 실패했습니다.");
    }
  };

  return (
    <button
      onClick={copyLink}
      className="fixed cursor-pointer bottom-6 right-6 bg-blue-300/80 p-5 rounded-full shadow-lg bg-gold-primary"
    >
      <LinkIcon className="size-6" />
    </button>
  );
};

export default LinkButton;
