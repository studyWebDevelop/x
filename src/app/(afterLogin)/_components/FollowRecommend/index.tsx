"use client";
import st from "./FollowRecommend.module.css";

const FollowRecommend = () => {
  const onFollow = () => {};

  const user = {
    id: "elonmusk",
    nickname: "Elon Musk",
    image: "/yRsRRjGO.jpg",
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
