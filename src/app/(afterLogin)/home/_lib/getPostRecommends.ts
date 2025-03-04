export const getPostRecommend = async ({
  pageParam,
}: {
  pageParam: number;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/postRecommends?cursor=${pageParam}`,
    {
      next: {
        tags: ["posts", "recommends"],
      },
      cache: "force-cache",
      // cache: "no-store", // 기본값으로 캐싱을 안함 캐싱이 필요하면 (force-cache 사용), force-cache를 사용하면 여러명이 하나의 서버로 요청 보낼때 첫 요청은 백엔드 서버로, 두 번째 유저 부터는 데이터 케시에 저장된 response값을 사용
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch error");
  }

  return response.json();
};
