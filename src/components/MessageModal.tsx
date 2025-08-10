import { useState, type ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "./ui/alert-dialog";

interface MessageModalProps {
  name: string;
  message: string | null;
  children: ReactNode;
}

const MessageModal = ({ message, name, children }: MessageModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      {open && (
        <AlertDialogContent className="flex flex-col gap-6">
          <AlertDialogHeader className="flex flex-col gap-6">
            <AlertDialogTitle className="font-bold text-blue text-[20px]">
              {name} 님의 축하 메시지
            </AlertDialogTitle>
            <div className="h-0 w-full border" />
            <AlertDialogDescription className="text-[15px] font-normal text-left text-[#3A3A3A] whitespace-pre-line max-h-[60dvh] overflow-y-scroll">
              {message ?? "축하 메시지는 졸업식 당일 본인에게만 공개됩니다!"}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <button
              onClick={() => setOpen(false)}
              className="h-[57px] rounded-xl cursor-pointer hover:bg-blue/80 active:bg-blue/80 bg-blue text-white text-center font-bold text-[18px] w-full"
            >
              닫기
            </button>
          </AlertDialogFooter>
        </AlertDialogContent>
      )}
    </AlertDialog>
  );
};

export default MessageModal;
