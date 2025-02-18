import BackButton from "@/app/(afterLogin)/_components/BackButton";
import st from "./singlePost.module.css";
import Post from "@/app/(afterLogin)/_components/Post";
import CommentForm from "./_components/CommentForm";

const SinglePost = () => {
  return (
    <div className={st.main}>
      <div className={st.header}>
        <BackButton />
        <h3 className={st.headerTitle}>게시하기</h3>
      </div>
      <div style={{ marginTop: "53px" }}>
        <Post />
        <CommentForm />
        <div>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
