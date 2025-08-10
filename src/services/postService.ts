import { instance } from "@/lib/axios";
import type { AddPostRequest, MessageData } from "@/types/type";

export const postApi = {
  getPosts: async (link: string) => {
    const res = await instance.get<MessageData>(`/api/v1/post/${link}`);

    return res.data;
  },
  addPost: async ({ data, link }: AddPostRequest) => {
    const res = await instance.post(`/api/v1/post/${link}`, data);

    return res.data;
  }
};
