import { HeartIcon, MessageSquareMoreIcon } from "lucide-react";

interface CelebrationCountProps {
  count: number;
}

export default function CelebrationCount({ count }: CelebrationCountProps) {
  return (
    <div className="mt-6 mb-4 flex justify-center">
      <div className="bg-white bg-opacity-95 rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-xl border-2 border-pink-200">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
            <MessageSquareMoreIcon className="text-pink-600 text-base sm:text-lg" />
          </div>
          <span className="text-base sm:text-lg font-bold text-pink-800">{count}개의 축하</span>
          <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
            <HeartIcon className=" text-pink-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
