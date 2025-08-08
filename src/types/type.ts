export interface MessageData {
  name: string;
  message: string | null;
  maru: MaruType;
}

export type MaruType = "center" | number;
