import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import PostForm from "./_components/PostForm";
import Tap from "./_components/Tab";
import st from "./Home.module.css";
import { getPostRecommend } from "./_lib/getPostRecommends";
import TabDecider from "./_components/TabDecider";

const Home = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommend,
  });

  const deHydratedState = dehydrate(queryClient);

  // queryClient.getQueryData(["posts", "recommends"]); data 가져오기

  // await getPostRecommend() // 리퀘스트 메모이제이션 이라는 넥스트 자체의 효과로 인해서 5번의 요청이 들어왔을때는 처음 요청에만 데이터를 보내고 나머지 요청은 처음 데이터 메모이제이션해서 사용함
  // await getPostRecommend()
  // await getPostRecommend()

  return (
    <div className={st.container}>
      <HydrationBoundary state={deHydratedState}>
        <Tap />
        <PostForm />
        <TabDecider />
      </HydrationBoundary>
    </div>
  );
};

export default Home;
