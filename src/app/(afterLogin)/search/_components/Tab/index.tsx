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
    router.replace(`/search?q=${searchParams.get("q")}`);
  };
  const onClickNew = () => {
    setCurrent("new");
    router.replace(`/search?${searchParams.toString()}&f=live`);
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
