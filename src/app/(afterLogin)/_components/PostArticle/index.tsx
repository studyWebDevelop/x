/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import st from "./PostArticle.module.css";

interface PostArticleProps {
  children: React.ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
}

const PostArticle = ({ children, post }: PostArticleProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    <article onClickCapture={onClick} className={st.post}>
      {children}
    </article>
  );
};

export default PostArticle;
