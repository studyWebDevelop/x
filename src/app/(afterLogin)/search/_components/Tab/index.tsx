"use client";

import { useState } from "react";
import st from "./Tab.module.css";
import { useRouter, useSearchParams } from "next/navigation";

const Tap = () => {
  const [current, setCurrent] = useState("hot");
  const router = useRouter();
  const searchParams = useSearchParams();
  const onClickHot = () => {
    setCurrent("hot");
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("f");

    router.replace(`/search?${newSearchParams.toString()}`);
  };
  const onClickNew = () => {
    setCurrent("new");
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("f", "live");

    router.replace(`/search?${newSearchParams.toString()}`);
  };

  return (
    <div className={st.homeFixed}>
      <div className={st.homeTab}>
        <div onClick={onClickHot}>
          인기
          <div className={st.tabIndicator} hidden={current === "new"}></div>
        </div>
        <div onClick={onClickNew}>
          최신
          <div className={st.tabIndicator} hidden={current === "hot"}></div>
        </div>
      </div>
    </div>
  );
};

export default Tap;
