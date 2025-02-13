"use client";

import { useState } from "react";
import st from "./loginModal.module.css";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const onSubmit = () => {};

  const router = useRouter();

  const onClickClose = () => {
    router.back();
  };

  const onChangeId = () => {};

  const onChangePassword = () => {};

  return (
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
          <div>로그인하세요.</div>
        </div>
        <form onSubmit={onSubmit}>
          <div className={st.modalBody}>
            <div className={st.inputDiv}>
              <label className={st.inputLabel} htmlFor="id">
                아이디
              </label>
              <input
                id="id"
                className={st.input}
                value={id}
                onChange={onChangeId}
                type="text"
                placeholder=""
              />
            </div>
            <div className={st.inputDiv}>
              <label className={st.inputLabel} htmlFor="password">
                비밀번호
              </label>
              <input
                id="password"
                className={st.input}
                value={password}
                onChange={onChangePassword}
                type="password"
                placeholder=""
              />
            </div>
          </div>
          <div className={st.message}>{message}</div>
          <div className={st.modalFooter}>
            <button className={st.actionButton} disabled={!id && !password}>
              로그인하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
