"use client";

import { useQuery } from "@tanstack/react-query";
import Post from "../../_components/Post";
import type { Post as IPost } from "@/model/Post";
import { getFollowingPosts } from "../_lib/getFollowingPosts";

const FollowingPosts = () => {
  const { data } = useQuery<IPost[]>({
    queryKey: ["posts", "followings"],
    queryFn: getFollowingPosts,
    staleTime: 30 * 1000, // fresh -> stale
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
};

export default FollowingPosts;
