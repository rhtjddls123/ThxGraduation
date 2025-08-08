import { cn } from "@/lib/utils";

type MaruType = "center" | "maru5" | "maru4" | "maru3" | "maru2" | "maru1";

interface MaruImgProps {
  type: MaruType;
  name: string;
  src: string;
  textColor?: "black" | "white";
}

const stylesByType: Record<MaruType, { bottom: string; horizontalClass: string; width: string }> = {
  center: {
    bottom: "24.01%",
    horizontalClass: "",
    width: "clamp(113px, calc((100vw - 390px) / 410 * (179 - 113) + 113px), 179px)"
  },
  maru5: {
    bottom: "8.5%",
    horizontalClass: "right-[calc(1.4%+28px)]",
    width: "clamp(76px, calc((100vw - 390px) / 410 * (144 - 76) + 76px), 144px)"
  },
  maru4: {
    bottom: "4.12%",
    horizontalClass: "right-[calc(18.26%+28px)]",
    width: "clamp(90px, calc((100vw - 390px) / 410 * (156 - 90) + 90px), 156px)"
  },
  maru3: {
    bottom: "3.59%",
    horizontalClass: "right-[calc(34.27%+28px)]",
    width: "clamp(94px, calc((100vw - 390px) / 410 * (174 - 94) + 94px), 174px)"
  },
  maru2: {
    bottom: "5.41%",
    horizontalClass: "left-[calc(15.07%+28px)]",
    width: "clamp(77px, calc((100vw - 390px) / 410 * (139 - 77) + 77px), 139px)"
  },
  maru1: {
    bottom: "17.01%",
    horizontalClass: "left-[calc(1.79%+28px)]",
    width: "clamp(82px, calc((100vw - 390px) / 410 * (156 - 82) + 82px), 156px)"
  }
};

const MaruImg = ({ type, name, src, textColor = "black" }: MaruImgProps) => {
  const { bottom, horizontalClass, width } = stylesByType[type];

  return (
    <div className={cn("absolute flex flex-col items-center", horizontalClass)} style={{ bottom }}>
      <span
        className={cn("font-bold text-sm", textColor === "black" ? "text-black" : "text-white")}
      >
        {name}
      </span>
      <img src={src} alt={name} style={{ width }} />
    </div>
  );
};

export default MaruImg;
