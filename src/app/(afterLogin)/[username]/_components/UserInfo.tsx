"use client";

import st from "../profile.module.css";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/model/User";
import { getUser } from "@/app/(afterLogin)/[username]/_lib/getUser";
import BackButton from "../../_components/BackButton";

type Props = {
  username: string;
};
export default function UserInfo({ username }: Props) {
  const { data: user, error } = useQuery<
    User, // query function type
    object, // error type
    User, // data type
    [_1: string, _2: string] // query key type
  >({
    queryKey: ["users", username],
    queryFn: getUser,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  console.dir(error);
  if (error) {
    return (
      <>
        <div className={st.header}>
          <BackButton />
          <h3 className={st.headerTitle}>프로필</h3>
        </div>
        <div className={st.userZone}>
          <div className={st.userImage}></div>
          <div className={st.userName}>
            <div>@{username}</div>
          </div>
        </div>
        <div
          style={{
            height: 100,
            alignItems: "center",
            fontSize: 31,
            fontWeight: "bold",
            justifyContent: "center",
            display: "flex",
            color: "black",
          }}
        >
          계정이 존재하지 않음
        </div>
      </>
    );
  }
  if (!user) {
    return null;
  }
  return (
    <>
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
        <button className={st.followButton}>팔로우</button>
      </div>
    </>
  );
}
