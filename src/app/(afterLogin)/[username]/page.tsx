import BackButton from "../_components/BackButton";
import Post from "../_components/Post";
import LogoutButton from "./_components/LogoutButton";
import st from "./profile.module.css";

const Username = async () => {
  const user = {
    id: "zerohch0",
    nickname: "제로초",
    image: "/5Udwvqim.jpg",
  };

  return (
    <main className={st.main}>
      <div className={st.header}>
        <BackButton />
        <h3 className={st.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={st.userZone}>
        <div className={st.userImage}>
          <img src={user.image} alt={user.id} />
        </div>
        <div className={st.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>

        <LogoutButton />
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
};

export default Username;
