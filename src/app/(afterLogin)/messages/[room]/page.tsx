import { faker } from "@faker-js/faker";
import st from "./room.module.css";
import BackButton from "../../_components/BackButton";
import Link from "next/link";

import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import clsx from "clsx";

dayjs.locale("ko");
dayjs.extend(relativeTime);

const RoomDetail = () => {
  const user = {
    id: "hero",
    nickname: "영웅",
    image: faker.image.avatar(),
  };

  const messages = [
    {
      messageId: 1,
      roomId: 123,
      id: "zerohch0",
      content: "안녕하세요.",
      createdAt: new Date(),
    },
    {
      messageId: 2,
      roomId: 123,
      id: "hero",
      content: "안녕히가세요.",
      createdAt: new Date(),
    },
  ];

  return (
    <main className={st.main}>
      <div className={st.header}>
        <BackButton />
        <div>
          <h2>{user.nickname}</h2>
        </div>
      </div>
      <Link href={user.nickname} className={st.userInfo}>
        <img src={user.image} alt={user.id} />
        <div style={{ marginTop: "10px" }}>
          <b>{user.nickname}</b>
        </div>
        <div>@{user.id}</div>
      </Link>
      <div className={st.list}>
        {messages.map((m) => {
          if (m.id === "zerohch0") {
            // 내 메시지면
            return (
              <div key={m.messageId} className={clsx(st.message, st.myMessage)}>
                <div className={st.content}>{m.content}</div>
                <div className={st.date}>
                  {dayjs(m.createdAt).format("YYYY년 MM월 DD일 A HH시 mm분")}
                </div>
              </div>
            );
          }
          return (
            <div key={m.messageId} className={clsx(st.message, st.yourMessage)}>
              <div className={st.content}>{m.content}</div>
              <div className={st.date}>
                {dayjs(m.createdAt).format("YYYY년 MM월 DD일 A HH시 mm분")}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default RoomDetail;
