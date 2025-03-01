"use client";

import { useSession } from "next-auth/react";
import st from "./FollowRecommend.module.css";
import { redirect } from "next/navigation";
import { User } from "@/model/User";

interface Props {
  user: User;
}
const FollowRecommend = ({ user }: Props) => {
  const { data: me } = useSession();

  const onFollow = () => {
    if (!me?.user) {
      alert("로그인이 필요합니다.");
      redirect("/");
    }
  };

  return (
    <div className={st.container}>
      <div className={st.userLogoSection}>
        <div className={st.userLogo}>
          <img src={user.image} alt={user.id} />
        </div>
      </div>
      <div className={st.userInfo}>
        <div className={st.title}>{user.nickname}</div>
        <div className={st.count}>@{user.id}</div>
      </div>
      <div className={st.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  );
};

export default FollowRecommend;
