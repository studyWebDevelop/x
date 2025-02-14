"use client";

import st from "./LogoutButton.module.css";

const me = {
  // 임시로 내 정보 있는것처럼
  id: "zerohch0",
  nickname: "제로초",
  image: "/5Udwvqim.jpg",
};

const onLogout = () => {
  console.log("123");
};

const LogoutButton = () => {
  return (
    <button className={st.logOutButton} onClick={onLogout}>
      <div className={st.logOutUserImage}>
        <img src={me.image} alt={me.nickname} />
      </div>
      <div className={st.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
};

export default LogoutButton;
