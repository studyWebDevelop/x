"use client";

import { useQuery } from "@tanstack/react-query";
import { getPostRecommend } from "../_lib/postRecommends";
import Post from "../../_components/Post";
import type { Post as IPost } from "@/model/Post";

const PostRecommends = () => {
  const { data } = useQuery<IPost[]>({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommend,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
};

export default PostRecommends;
