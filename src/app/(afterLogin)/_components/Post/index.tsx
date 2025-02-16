import Link from "next/link";
import st from "./Post.module.css";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionButtons from "./ActionButtons";

dayjs.locale("ko");
dayjs.extend(relativeTime);

const Post = () => {
  const target = {
    User: {
      id: "elonmusk",
      nickname: "Elon Musk",
      image: "/yRsRRjGO.jpg",
    },
    content: "클론코딩 라이브로 하니 너무 힘들어요 ㅠㅠ",
    createdAt: new Date(),
    Images: [],
  };

  return (
    <article className={st.post}>
      <div className={st.postWrapper}>
        <div className={st.postUserSection}>
          <Link href={`/${target.User.id}`} className={st.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={st.postShade} />
          </Link>
        </div>
        <div className={st.postBody}>
          <div className={st.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={st.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={st.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={st.postDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          <div className={st.postImageSection}></div>
        </div>
      </div>
      <ActionButtons />
    </article>
  );
};

export default Post;
