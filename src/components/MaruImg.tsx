import { cn } from "@/lib/utils";
import type { MaruType } from "@/types/type";

interface MaruImgProps {
  type: MaruType;
  order: "center" | number;
  name: string;
  textColor?: "black" | "white";
}

const stylesByType: Record<"center" | number, { bottom: string; horizontalClass: string }> = {
  center: {
    bottom: "24.01%",
    horizontalClass: ""
  },
  5: {
    bottom: "8.5%",
    horizontalClass: "right-[calc(1.4%+28px)]"
  },
  4: {
    bottom: "4.12%",
    horizontalClass: "right-[calc(18.26%+28px)]"
  },
  3: {
    bottom: "3.59%",
    horizontalClass: "right-[calc(34.27%+28px)]"
  },
  2: {
    bottom: "5.41%",
    horizontalClass: "left-[calc(15.07%+28px)]"
  },
  1: {
    bottom: "17.01%",
    horizontalClass: "left-[calc(1.79%+28px)]"
  }
};

const maruStyle: Record<MaruType, { src: string; width: string }> = {
  center: {
    src: "/maru_center.png",
    width: "clamp(113px, calc((100vw - 390px) / 410 * (179 - 113) + 113px), 179px)"
  },
  BACKPACK: {
    src: "/maru5.png",
    width: "clamp(76px, calc((100vw - 390px) / 410 * (144 - 76) + 76px), 144px)"
  },
  CARROT: {
    src: "/maru4.png",
    width: "clamp(90px, calc((100vw - 390px) / 410 * (156 - 90) + 90px), 156px)"
  },
  REPORT_CARD: {
    src: "/maru3.png",
    width: "clamp(94px, calc((100vw - 390px) / 410 * (174 - 94) + 94px), 174px)"
  },
  CHEERLEADER: {
    src: "/maru2.png",
    width: "clamp(77px, calc((100vw - 390px) / 410 * (139 - 77) + 77px), 139px)"
  },
  STUDY: {
    src: "/maru1.png",
    width: "clamp(82px, calc((100vw - 390px) / 410 * (156 - 82) + 82px), 156px)"
  }
};

const MaruImg = ({ type, name, textColor = "black", order }: MaruImgProps) => {
  const { bottom, horizontalClass } = stylesByType[order];
  const { src, width } = maruStyle[type];

  return (
    <button
      className={cn("absolute flex flex-col items-center cursor-pointer", horizontalClass)}
      style={{ bottom }}
    >
      <span
        className={cn(
          "font-extrabold text-base",
          textColor === "black" ? "text-black " : "text-white"
        )}
        style={{
          WebkitTextStroke: "0.4px white"
        }}
      >
        {name}
      </span>
      <img src={src} alt={name} style={{ width }} />
    </button>
  );
};

export default MaruImg;
