"use client";

import { useRouter } from "next/navigation";
import Main from "../_components/Main";

const Login = () => {
  const router = useRouter();
  router.replace("/i/flow/login");

  return <Main />;
};

export default Login;

// push와 replace의 차이
// push는 바로 이전 페이지로감
// replace는 이전의 이전 페이지로감. (이전의 히스토리를 지우기 때문임)
