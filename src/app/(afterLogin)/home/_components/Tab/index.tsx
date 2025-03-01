"use client";

import { observer } from "mobx-react";
import st from "./Tab.module.css";
import { tabStore } from "@/store/tabStore";

const Tab = observer(() => {
  const onClickRec = () => {
    tabStore.setTab("rec");
    console.log("rec", tabStore.tab);
  };
  const onClickFol = () => {
    tabStore.setTab("fol");
    console.log("fol", tabStore.tab);
  };

  return (
    <div className={st.homeFixed}>
      <div className={st.homeText}>홈</div>
      <div className={st.homeTab}>
        <div onClick={onClickRec}>
          추천
          <div
            className={st.tabIndicator}
            hidden={tabStore.tab === "fol"}
          ></div>
        </div>
        <div onClick={onClickFol}>
          팔로우 중
          <div
            className={st.tabIndicator}
            hidden={tabStore.tab === "rec"}
          ></div>
        </div>
      </div>
    </div>
  );
});

export default Tab;
