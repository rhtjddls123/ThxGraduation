export interface MessageData {
  name: string;
  message: string | null;
  characterType: MaruType;
  createAt: string;
}

export type MaruType = "center" | "BACKPACK" | "REPORT_CARD" | "STUDY" | "CARROT" | "CHEERLEADER";

export interface AddPostRequest {
  data: {
    name: string;
    message: string;
    characterType: MaruType;
  };
  link: string;
}
