"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import st from "./Post.module.css";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

import { faker } from "@faker-js/faker";
import ActionButtons from "./ActionButtons";
import PostArticle from "../PostArticle";
import PostImages from "../PostImages";
import type { Post } from "@/model/Post";

dayjs.locale("ko");
dayjs.extend(relativeTime);

interface PostProps {
  noImage?: boolean;
  post: Post;
}

const Post = ({ noImage, post }: PostProps) => {
  const target = post;

  if (Math.random() > 0.5 && !noImage) {
    target.Images.push(
      { imageId: 1, link: faker.image.urlLoremFlickr() },
      { imageId: 2, link: faker.image.urlLoremFlickr() },
      { imageId: 3, link: faker.image.urlLoremFlickr() },
      { imageId: 4, link: faker.image.urlLoremFlickr() }
    );
  }

  return (
    <PostArticle post={target}>
      <div className={st.postWrapper}>
        <div className={st.postUserSection}>
          <Link href={`/${target.User.id}`} className={st.postUserImage}>
            <img src={target?.User.image} alt={target.User.nickname} />
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

          <div className={st.postImageSection}>
            <PostImages post={target} />
          </div>
        </div>
      </div>
      <ActionButtons />
    </PostArticle>
  );
};

export default Post;
