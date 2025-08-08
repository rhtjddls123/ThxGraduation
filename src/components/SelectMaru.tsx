import { useState } from "react";

const maruList = [
  { id: 1, name: "maru1", src: "/maru1.png" },
  { id: 2, name: "maru2", src: "/maru2.png" },
  { id: 3, name: "maru3", src: "/maru3.png" },
  { id: 4, name: "maru4", src: "/maru4.png" },
  { id: 5, name: "maru5", src: "/maru5.png" }
];

const SelectMaru = () => {
  const [selectedId, setSelectedId] = useState<number>(1);

  return (
    <div>
      <h2 className="block text-base font-medium text-gray mb-1">마루 선택</h2>
      <div className="flex gap-4 flex-wrap">
        {maruList.map((maru) => (
          <button
            key={maru.id}
            onClick={() => setSelectedId(maru.id)}
            className={`
              rounded-full border-4 
              ${selectedId === maru.id ? "border-blue" : "border-transparent"}
              focus:outline-none
              transition
              w-16 h-16
              flex items-center justify-center
              p-1
              bg-white
              shadow-md
              hover:scale-110
              active:scale-95
            `}
            aria-label={maru.name}
          >
            <img
              src={maru.src}
              alt={maru.name}
              className="rounded-full w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectMaru;
