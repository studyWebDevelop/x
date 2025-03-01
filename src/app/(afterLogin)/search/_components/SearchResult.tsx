"use client";

import { useQuery } from "@tanstack/react-query";
import Post from "../../_components/Post";
import { Post as IPost } from "@/model/Post";
import { getSearchResult } from "../_lib/getSearchResult";

type SearchResultProps = {
  searchParams: { q: string; f?: string; pf?: string };
};

const SearchResult = ({ searchParams }: SearchResultProps) => {
  const { data } = useQuery<
    IPost[],
    object, // 에러타입
    IPost[],
    [_1: string, _2: string, SearchResultProps["searchParams"]]
  >({
    queryKey: ["posts", "search", searchParams],
    queryFn: getSearchResult,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
};

export default SearchResult;
