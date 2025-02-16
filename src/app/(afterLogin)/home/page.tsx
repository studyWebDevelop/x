import Post from "../_components/Post";
import PostForm from "./_components/PostForm";
import Tap from "./_components/Tab";
import st from "./Home.module.css";

const Home = () => {
  return (
    <div className={st.container}>
      <Tap />
      <PostForm />
      <Post />
    </div>
  );
};

export default Home;
