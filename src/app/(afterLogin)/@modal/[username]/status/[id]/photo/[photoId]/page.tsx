import st from "./photoModal.module.css";
import PhotoModalCloseButton from "./_components/PhotoModalCloseButton";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getSinglePost } from "./_components/_lib/getSinglePost";
import { getComments } from "./_components/_lib/getComments";
import SinglePost from "@/app/(afterLogin)/[username]/_components/SinglePost";
import ImageZone from "./_components/ImageZone";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_components/CommentForm";
import Comments from "@/app/(afterLogin)/[username]/status/[id]/_components/Comments";

interface PhotoModalProps {
  params: { id: string };
}
const PhotoModal = async ({ params }: PhotoModalProps) => {
  const { id } = params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["users", id],
    queryFn: getSinglePost,
  });

  await queryClient.prefetchQuery({
    queryKey: ["posts", id, "comments"],
    queryFn: getComments,
  });

  const deHydratedState = dehydrate(queryClient);

  return (
    <div className={st.container}>
      <HydrationBoundary state={deHydratedState}>
        <PhotoModalCloseButton />
        <ImageZone id={id} />
        <div className={st.commentZone}>
          <SinglePost id={id} noImage />
          <CommentForm id={id} />
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
};

export default PhotoModal;
