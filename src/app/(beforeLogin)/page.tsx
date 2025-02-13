import Image from "next/image";
import st from "./page.module.css";
import zLogo from "../../../public/zlogo.png";
import Link from "next/link";

const Home = () => {
  return (
    <div className={st.container}>
      <div className={st.left}>
        <Image src={zLogo} alt="logo" />
      </div>
      <div className={st.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={st.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/i/flow/login" className={st.login}>
          로그인
        </Link>
      </div>
    </div>
  );
};

export default Home;
