import BannerSection from "@/components/BannerSection";
import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";
import MessageForm from "@/components/MessageForm";
import { useIsLogin } from "@/hooks/useAuth";
import { useAddPost, useGetPosts } from "@/hooks/usePost";
import type { MaruType } from "@/types/type";
import { useParams } from "react-router-dom";

const MainPage = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const { data, isPending, isError } = useGetPosts(uuid || "");
  const { mutateAsync, isPending: addIsPending } = useAddPost();
  useIsLogin();

  if (isPending || isError) return null;

  const handleSubmit = async (name: string, message: string, maru: MaruType) => {
    if (addIsPending) return null;

    await mutateAsync({ data: { name, message, characterType: maru }, link: uuid || "" });
  };

  return (
    <>
      <Header />
      <BannerSection data={data} />
      <main className="grid grid-cols-1 px-7 bg-blue-50 pb-8">
        <MessageForm onSubmit={handleSubmit} />
      </main>
      <LinkButton />
    </>
  );
};

export default MainPage;
