import { postApi } from "@/services/postService";
import type { AddPostRequest } from "@/types/type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetPosts = (link: string) => {
  return useQuery({
    queryFn: () => postApi.getPosts(link),
    queryKey: ["posts"]
  });
};

export const useAddPost = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, unknown, AddPostRequest>({
    mutationFn: (data) => postApi.addPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
        exact: true
      });
      toast.success("메세지가 작성 되었습니다.");
    },
    onError: (error) => {
      toast.error(error as string);
    }
  });
};
