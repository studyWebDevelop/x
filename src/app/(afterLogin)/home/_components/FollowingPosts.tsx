"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import Post from "../../_components/Post";
import type { Post as IPost } from "@/model/Post";
import { getFollowingPosts } from "../_lib/getFollowingPosts";

const FollowingPosts = () => {
  const { data } = useSuspenseQuery<IPost[]>({ // client 컴포넌트에서 suspense 사용하는 방법
    queryKey: ["posts", "followings"],
    queryFn: getFollowingPosts,
    staleTime: 30 * 1000, // fresh -> stale
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
};

export default FollowingPosts;
