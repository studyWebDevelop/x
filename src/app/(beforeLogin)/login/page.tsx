"use client";

import { useRouter } from "next/navigation";
import Main from "../_components/Main";
import { useEffect } from "react";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/i/flow/login");
  }, []);

  return <Main />;
};

export default Login;

// push와 replace의 차이
// push는 바로 이전 페이지로감
// replace는 이전의 이전 페이지로감. (이전의 히스토리를 지우기 때문임)

// 인터셉팅 라우트는 이전페이지에 겹처서 현재 페이지를 띄워줌

//  cannot update a component 다른 컴포넌트를 랜더링 하는중에 컴포넌트를 업데이트 할 수 없다.
// 화면 랜더링이 끝난 후에 router를 실행하여 에러 수정
