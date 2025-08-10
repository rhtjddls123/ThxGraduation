import type { MessageData } from "@/types/type";
import CelebrationCount from "./CelebrationCount";
import MaruImg from "./MaruImg";
import { sliceArray } from "@/utils/sliceArray";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "./ui/carousel";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import MessageModal from "./MessageModal";

interface BannerSectionProps {
  data: MessageData[];
}

export default function BannerSection({ data }: BannerSectionProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const sliceData = sliceArray(data);

  const handlePrev = () => {
    api?.scrollPrev();
  };
  const handleNext = () => {
    api?.scrollNext();
  };

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="flex flex-col items-center pb-8 bg-blue-50">
      <div className="relative w-full mx-auto">
        <Carousel setApi={setApi}>
          <CarouselContent className="ml-0">
            {sliceData.length === 0 && (
              <CarouselItem className="flex justify-center pt-4 bg-blue-50 w-full px-7 relative">
                <img
                  src="/banner.png"
                  alt="banner"
                  className="object-cover w-full z-0 relative rounded-lg min-h-[338px]"
                />
                <MaruImg name="고성인" type="center" order="center" />
              </CarouselItem>
            )}
            {sliceData.map((datas, idx) => (
              <CarouselItem
                className="flex justify-center pt-4 bg-blue-50 w-full px-7 relative"
                key={idx}
              >
                <img
                  src="/banner.png"
                  alt="banner"
                  className="object-cover w-full z-0 relative rounded-lg min-h-[338px]"
                />
                <MaruImg name="고성인" type="center" order="center" />
                {datas.map(({ name, characterType, message }, idx) => (
                  <MessageModal name={name} message={message} key={`${name}-${idx}`}>
                    <MaruImg name={name} type={characterType} order={idx + 1} />
                  </MessageModal>
                ))}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex gap-5 justify-center pt-4">
          <button onClick={handlePrev}>
            <ChevronLeftIcon className="size-5" />
          </button>
          {current} / {count}
          <button onClick={handleNext}>
            <ChevronRightIcon className="size-5" />
          </button>
        </div>

        <CelebrationCount count={data.length} />
      </div>
    </section>
  );
}
