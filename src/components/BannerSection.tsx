import { FlowerIcon } from "lucide-react";
import { useMemo } from "react";

export default function BannerSection({ flowerCount = 0 }: { flowerCount?: number }) {
  const minDistance = 2;

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
    <section className="flex justify-center pt-4 bg-blue-50 w-full px-4 relative">
      <img src="/banner.png" alt="banner" className="object-contain w-full z-0 relative max-w-md" />

      {flowers.map((pos) => (
        <FlowerIcon
          key={pos.id}
          className="text-red-500 size-12 absolute z-20"
          style={{
            top: `${pos.top}%`,
            left: `${pos.left}%`
          }}
        />
      ))}
    </section>
  );
}
