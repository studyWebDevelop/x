export const getFollowingPosts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/followingPosts`,
    {
      next: {
        tags: ["posts", "followings"],
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch error");
  }

  return response.json();
};
