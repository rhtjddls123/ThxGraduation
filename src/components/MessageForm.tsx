import { useState } from "react";

export default function MessageForm({
  onSubmit
}: {
  onSubmit: (name: string, message: string) => void;
}) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);

  return (
    <div className="relative bg-white p-6 rounded-lg shadow w-full max-w-md h-96 flex flex-col">
      <h2 className="text-lg font-semibold mb-4">🎉 축하 메시지 남기기</h2>

      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
      />

      <textarea
        placeholder="따뜻한 축하 메시지를 남겨주세요 (최대 500자)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={500}
        className="w-full border border-gray-300 rounded px-3 py-2 resize-none h-full mb-2"
      />

      <div className="text-right text-sm text-gray-500 mb-4">{message.length}/500</div>

      <button
        onClick={() => {
          if (name && message) {
            onSubmit(name, message);
            setSubmit(true);
          }
        }}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        축하 메시지 등록
      </button>
      {submit && (
        <>
          <div className="absolute inset-0 bg-gray-600/40 z-20" />
          <p className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center px-4 text-lg font-semibold max-w-[80%]">
            메세지는 졸업식날 본인에게 공개됩니다!
          </p>
        </>
      )}
    </div>
  );
}
