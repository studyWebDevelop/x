"use client";

import st from "./signupModal.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { ChangeEventHandler, FormEventHandler } from "react";

export default function SignupModal() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState<File>();

  const router = useRouter();
  
  const onClickClose = () => {
    router.back();
    // TODO: 뒤로가기가 /home이 아니면 /home으로 보내기
  };

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };
  const onChangeNickname: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNickname(e.target.value);
  };
  const onChangeImageFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.files && setImageFile(e.target.files[0]);
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:9090/api/users", {
      method: "post",
      body: JSON.stringify({
        id,
        nickname,
        image,
        password,
      }),
      credentials: "include",
    })
      .then((response: Response) => {
        console.log(response.status);
        if (response.status === 200) {
          router.replace("/home");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className={st.modalBackground}>
        <div className={st.modal}>
          <div className={st.modalHeader}>
            <button className={st.closeButton} onClick={onClickClose}>
              <svg
                width={24}
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
              >
                <g>
                  <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                </g>
              </svg>
            </button>
            <div>계정을 생성하세요.</div>
          </div>
          <form>
            <div className={st.modalBody}>
              <div className={st.inputDiv}>
                <label className={st.inputLabel} htmlFor="id">
                  아이디
                </label>
                <input
                  id="id"
                  className={st.input}
                  type="text"
                  placeholder=""
                  value={id}
                  onChange={onChangeId}
                />
              </div>
              <div className={st.inputDiv}>
                <label className={st.inputLabel} htmlFor="name">
                  닉네임
                </label>
                <input
                  id="name"
                  className={st.input}
                  type="text"
                  placeholder=""
                  value={nickname}
                  onChange={onChangeNickname}
                />
              </div>
              <div className={st.inputDiv}>
                <label className={st.inputLabel} htmlFor="password">
                  비밀번호
                </label>
                <input
                  id="password"
                  className={st.input}
                  type="password"
                  placeholder=""
                  value={password}
                  onChange={onChangePassword}
                />
              </div>
              <div className={st.inputDiv}>
                <label className={st.inputLabel} htmlFor="image">
                  프로필
                </label>
                <input
                  id="image"
                  className={st.input}
                  type="file"
                  accept="image/*"
                  onChange={onChangeImageFile}
                />
              </div>
            </div>
            <div className={st.modalFooter}>
              <button className={st.actionButton} disabled>
                가입하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
