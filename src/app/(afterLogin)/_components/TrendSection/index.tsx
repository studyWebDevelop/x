"use client";

import { usePathname } from "next/navigation";
import Trend from "../Trend";
import st from "./TrendSction.module.css";
import { useSession } from "next-auth/react";

const TrendSection = () => {
  const pathname = usePathname();
  const { data: user } = useSession();

  if (pathname == "/explore") return null;

  return (
    <>
      {user ? (
        <div className={st.trendBg}>
          <div className={st.trend}>
            <h3 style={{ color: "black" }}>나를 위한 트렌드</h3>
            <Trend />
            <Trend />
            <Trend />
            <Trend />
            <Trend />
            <Trend />
            <Trend />
            <Trend />
            <Trend />
            <Trend />
          </div>
        </div>
      ) : (
        <div className={st.trendBg}>
          <div className={st.noLoginTrend}>
            <h3 style={{ color: "black" }}>트렌드를 가져올 수 없습니다.</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default TrendSection;
