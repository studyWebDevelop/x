"use client";

import { useSession } from "next-auth/react";
import st from "../profile.module.css";
import { redirect } from "next/navigation";

const LogoutButton = () => {
  const { data: me } = useSession();

  const handleClick = () => {
    if (!me?.user) {
      alert("로그인이 필요합니다.");
      redirect("/");
    }
  };

  return (
    <button onClick={handleClick} className={st.followButton}>
      팔로우
    </button>
  );
};

export default LogoutButton;
