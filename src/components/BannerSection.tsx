import { useMemo } from "react";
import CelebrationCount from "./CelebrationCount";
import MessageNotice from "./MessageNotice";
import LeafFlowerIcon from "./icon/LeafFlowerIcon";

export default function BannerSection({ flowerCount = 10 }: { flowerCount?: number }) {
  const minDistance = 3;

  const flowers = useMemo(() => {
    const positions: { id: number; top: number; left: number }[] = [];
    const maxAttempts = 1000;
    let attempts = 0;

    while (positions.length < flowerCount && attempts < maxAttempts) {
      attempts++;
      const top = Math.random() * 80 + 10;
      const left = Math.random() * 80 + 10;

      const isOverlap = positions.some(
        (p) => Math.abs(p.top - top) < minDistance && Math.abs(p.left - left) < minDistance
      );

      if (!isOverlap) {
        positions.push({ id: positions.length, top, left });
      }
    }

    return positions;
  }, [flowerCount]);

  return (
    <section className="flex flex-col items-center pb-8 bg-blue-50">
      <div className="relative w-full mx-auto">
        <section className="flex justify-center pt-4 bg-blue-50 w-full px-8 relative">
          <img
            src="/image.png"
            alt="banner"
            className="object-contain w-full z-0 relative rounded-lg"
          />

          {flowers.map((pos) => (
            <LeafFlowerIcon
              key={pos.id}
              leafColor="purple-400"
              animationDelay="0.3s"
              animationDuration="2s"
              style={{
                top: `${pos.top}%`,
                right: `${pos.left}%`
              }}
            />
          ))}
        </section>

        <CelebrationCount count={5} />
      </div>
      <MessageNotice />
    </section>
  );
}
