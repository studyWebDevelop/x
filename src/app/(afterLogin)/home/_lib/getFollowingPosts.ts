export const getFollowingPosts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/followingPosts`,
    {
      next: {
        tags: ["posts", "followings"],
      },
      cache: "force-cache", // 서버 컴포넌트에만 적용가능
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch error");
  }

  return response.json();
};
