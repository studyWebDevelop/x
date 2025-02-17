import Image from "next/image";
import st from "./layout.module.css";
import Link from "next/link";
import ZLogo from "../../../public/zlogo.png";
import NavMenu from "./_components/NavMenu";
import LogoutButton from "./_components/LogoutButton";
import TrendSection from "./_components/TrendSection";
import FollowRecommend from "./_components/FollowRecommend";
import RightSearchZone from "./_components/RightSearchZone";

interface HomeLayoutProps {
  children: React.ReactNode;
  modal?: React.ReactNode;
}

const AfterLoginLayout = ({ children, modal }: HomeLayoutProps) => {
  return (
    <div className={st.container}>
      <header className={st.leftSectionWrapper}>
        <section className={st.leftSection}>
          <div className={st.leftSectionFixed}>
            <Link className={st.logo} href="/home">
              <div className={st.logoPill}>
                <Image src={ZLogo} alt="z.com로고" width={40} height={40} />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={st.postButton}>
                게시하기
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className={st.rightSectionWrapper}>
        <div className={st.rightSectionInner}>
          <main className={st.main}>{children}</main>
          <section className={st.rightSection}>
            <RightSearchZone />
            <TrendSection />
            <div className={st.followRecommend}>
              <h3 style={{ color: "black" }}>팔로우 추천</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
};

export default AfterLoginLayout;
