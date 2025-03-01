import BackButton from "@/app/(afterLogin)/_components/BackButton";
import st from "./singlePost.module.css";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getSinglePost } from "../../_components/_lib/getSinglePosts";
import { getComments } from "../../_components/_lib/getComment";
import CommentForm from "./_components/CommentForm";
import Comments from "./_components/Comments";
import SinglePost from "../../_components/SinglePost";

type Props = {
  params: { id: string };
};

const Page = ({ params }: Props) => {
  const { id } = params;

  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
  });
  queryClient.prefetchQuery({
    queryKey: ["posts", id, "comments"],
    queryFn: getComments,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={st.main}>
      <HydrationBoundary state={dehydratedState}>
        {" "}
        <div className={st.header}>
          <BackButton />
          <h3 className={st.headerTitle}>게시하기</h3>
        </div>
        <SinglePost id={id} />
        <CommentForm id={id} />
        <div>
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
};

export default Page;
