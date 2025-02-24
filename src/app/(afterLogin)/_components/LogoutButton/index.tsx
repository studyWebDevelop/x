/* eslint-disable @next/next/no-img-element */
"use client";

import { signOut, useSession } from "next-auth/react";
import st from "./LogoutButton.module.css";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const onLogout = () => {
    signOut({ redirect: false }).then(() => {
      router.push("/");
    });
  };

  const { data: me } = useSession();

  if (!me?.user) {
    return null;
  }

  return (
    <button className={st.logOutButton} onClick={onLogout}>
      <div className={st.logOutUserImage}>
        <img src={me?.user.image as string} alt="" />
      </div>
      <div className={st.logOutUserName}>
        <div>{me?.user.name}</div>
        <div>@{me?.user.email}</div>
      </div>
    </button>
  );
};

export default LogoutButton;
