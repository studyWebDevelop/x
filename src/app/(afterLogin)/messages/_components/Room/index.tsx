"use client";

import st from "../../messages.module.css";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { useEffect, useMemo, useState } from "react";

faker.seed(123);
dayjs.locale("ko");
dayjs.extend(relativeTime);

const Room = () => {
  const router = useRouter();
  const user = {
    id: "hero",
    nickname: "영웅",
    Messages: [
      { roomId: 123, content: "안녕하세요.", createdAt: new Date() },
      { roomId: 123, content: "안녕히가세요.", createdAt: new Date() },
    ],
  };

  const [image, setImage] = useState<null | string>(null);

  useEffect(() => {
    setImage(faker.image.avatar());
  }, []);

  const onClick = () => {
    router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
  };

  return (
    <div className={st.room} onClickCapture={onClick}>
      <div className={st.roomUserImage}>
        <img src={image} alt="" />
      </div>
      <div className={st.roomChatInfo}>
        <div className={st.roomUserInfo}>
          <b>{user.nickname}</b>
          &nbsp;
          <span>@{user.id}</span>
          &nbsp; · &nbsp;
          <span className={st.postDate}>
            {dayjs(user.Messages?.at(-1)?.createdAt).fromNow(true)}
          </span>
        </div>
        <div className={st.roomLastChat}>{user.Messages?.at(-1)?.content}</div>
      </div>
    </div>
  );
};

export default Room;
