import type { MaruType } from "@/types/type";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const maruList: { id: MaruType; name: string; src: string }[] = [
  { id: "STUDY", name: "maru1", src: "/maru1.png" },
  { id: "CHEERLEADER", name: "maru2", src: "/maru2.png" },
  { id: "REPORT_CARD", name: "maru3", src: "/maru3.png" },
  { id: "CARROT", name: "maru4", src: "/maru4.png" },
  { id: "BACKPACK", name: "maru5", src: "/maru5.png" }
];

interface SelectMaruProps {
  selectedMaru: MaruType;
  onSelect: (id: MaruType) => void;
}

const SelectMaru = ({ selectedMaru, onSelect }: SelectMaruProps) => {
  return (
    <Carousel opts={{ align: "start", dragFree: true }}>
      <h2 className="block text-base font-medium text-gray mb-1">마루 선택</h2>
      <CarouselContent className="flex gap-2 m-0" style={{ width: "calc(fit-content + 24px)" }}>
        {maruList.map((maru) => (
          <CarouselItem key={maru.id} className="basis-auto pl-0">
            <button
              onClick={() => onSelect(maru.id)}
              className={`rounded-full border-4 
              ${
                selectedMaru === maru.id ? "border-blue" : "border-transparent"
              } focus:outline-none transition w-16 h-16 flex items-center justify-center p-1 bg-white shadow-md hover:scale-110 active:scale-95
            `}
              aria-label={maru.name}
            >
              <img
                src={maru.src}
                alt={maru.name}
                className="rounded-full w-full h-full object-cover"
              />
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default SelectMaru;
