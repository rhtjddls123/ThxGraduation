export interface MessageData {
  owner: string;
  posts: {
    name: string;
    message: string | null;
    characterType: MaruType;
    createAt: string;
  }[];
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

export interface LoginResponse {
  link: string;
  name: string;
}

export interface TokenRefreshResponse {
  owner: string;
  accessToken: string;
  refreshToken: string;
}
