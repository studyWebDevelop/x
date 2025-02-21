"use client";

import BackButton from "./_components/BackButton";
import st from "./signupModal.module.css";
import { useFormStatus } from "react-dom";
import { onSubmit } from "./_lib";
import { useActionState } from "react";

const showMessage = (messasge: string | null | undefined) => {
  if (messasge === "no_id") {
    return "아이디를 입력하세요.";
  }
  if (messasge === "no_name") {
    return "닉네임을 입력하세요.";
  }
  if (messasge === "no_password") {
    return "비밀번호를 입력하세요.";
  }
  if (messasge === "no_image") {
    return "이미지를 업로드하세요.";
  }
  if (messasge === "user_exists") {
    return "이미 사용 중인 아이디입니다.";
  }
  return "";
};

export default function SignupModal() {
  const [formState, formDispatch] = useActionState(onSubmit, { message: "" });
  const { pending } = useFormStatus();

  return (
    <div className={st.modalBackground}>
      <div className={st.modal}>
        <div className={st.modalHeader}>
          <BackButton />
          <div>계정을 생성하세요.</div>
        </div>
        <form action={formDispatch}>
          <div className={st.modalBody}>
            <div className={st.inputDiv}>
              <label className={st.inputLabel} htmlFor="id">
                아이디
              </label>
              <input
                id="id"
                name="id"
                className={st.input}
                type="text"
                placeholder=""
              />
            </div>
            <div className={st.inputDiv}>
              <label className={st.inputLabel} htmlFor="name">
                닉네임
              </label>
              <input
                id="name"
                name="name"
                className={st.input}
                type="text"
                placeholder=""
                required
              />
            </div>
            <div className={st.inputDiv}>
              <label className={st.inputLabel} htmlFor="password">
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                className={st.input}
                type="password"
                placeholder=""
                required
              />
            </div>
            <div className={st.inputDiv}>
              <label className={st.inputLabel} htmlFor="image">
                프로필
              </label>
              <input
                id="image"
                name="image"
                className={st.input}
                type="file"
                accept="image/*"
              />
            </div>
          </div>
          <div className={st.modalFooter}>
            <button
              type="submit"
              className={st.actionButton}
              disabled={pending}
            >
              가입하기
            </button>
            <div className={st.error}>{showMessage(formState?.message)}</div>
          </div>
        </form>
      </div>
    </div>
  );
}
