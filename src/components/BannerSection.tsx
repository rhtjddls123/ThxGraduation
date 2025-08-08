import CelebrationCount from "./CelebrationCount";
import MaruImg from "./MaruImg";
import MessageNotice from "./MessageNotice";

export default function BannerSection() {
  return (
    <section className="flex flex-col items-center pb-8 bg-blue-50">
      <div className="relative w-full mx-auto">
        <div className="flex justify-center pt-4 bg-blue-50 w-full px-7 relative">
          <img
            src="/banner.png"
            alt="banner"
            className="object-cover w-full z-0 relative rounded-lg min-h-[338px]"
          />
          <MaruImg src="/maru_center.png" name="고성인" type="center" />
          <MaruImg src="/maru5.png" name="백재혁" type="maru5" />
          <MaruImg src="/maru4.png" name="백재혁" type="maru4" />
          <MaruImg src="/maru3.png" name="백재혁" type="maru3" />
          <MaruImg src="/maru2.png" name="백재혁" type="maru2" />
          <MaruImg src="/maru1.png" name="백재혁" type="maru1" />
        </div>

        <CelebrationCount count={5} />
      </div>
      <MessageNotice />
    </section>
  );
}
