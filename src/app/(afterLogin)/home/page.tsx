import Post from "../_components/Post";
import PostForm from "./_components/PostForm";
import Tap from "./_components/Tab";
import st from "./Home.module.css";
import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();

  console.log("99999", session?.user);
  return (
    <div className={st.container}>
      <Tap />
      <PostForm />
      <Post />
    </div>
  );
};

export default Home;
