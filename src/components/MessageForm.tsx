import { useState } from "react";
import SelectMaru from "./SelectMaru";
import type { MaruType } from "@/types/type";

interface MessageFormProps {
  onSubmit: (name: string, message: string, maru: MaruType) => void;
}

export default function MessageForm({ onSubmit }: MessageFormProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [maru, setMaru] = useState<MaruType>(1);
  const [submit, setSubmit] = useState(false);

  const handleMaruSelect = (id: MaruType) => {
    setMaru(id);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-lg p-6 border border-blue-100 w-full">
      <h2 className="text-xl font-bold text-blue mb-4 flex items-center">🎉 축하 메시지 남기기</h2>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (name && message && maru) {
            onSubmit(name, message, maru);
            setSubmit(true);
          }
        }}
      >
        <SelectMaru selectedMaru={maru} onSelect={handleMaruSelect} />

        <div>
          <label htmlFor="name" className="block text-base font-medium text-gray mb-1">
            이름
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder="이름을 입력해주세요"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-base font-medium text-gray mb-1">
            축하 메시지
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
            rows={4}
            placeholder="따뜻한 축하 메시지를 남겨주세요 (최대 500자)"
            maxLength={500}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="text-right text-xs text-blue mt-1">{message.length}/500</div>
        </div>
        <button className="w-full bg-blue hover:bg-blue/90 active:bg-blue/90 disabled:bg-blue/30 text-white py-3 px-4 rounded-lg transition-colors font-medium whitespace-nowrap cursor-pointer">
          축하 메시지 등록
        </button>
      </form>

      {submit && (
        <>
          <div className="absolute inset-0 bg-gray-600/40 z-20 rounded-lg" />
          <p className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center px-8 text-lg font-semibold w-full">
            메세지는 졸업식날 본인에게 공개됩니다!
          </p>
        </>
      )}
    </div>
  );
}
