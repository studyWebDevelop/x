"use client";

import { usePathname } from "next/navigation";
import Trend from "../Trend";
import st from "./TrendSction.module.css";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { getTrends } from "./_lib/getTrends";
import type { Hashtag } from "@/model/Hashtag";

const TrendSection = () => {
  const { data: session } = useSession();
  const { data } = useQuery<Hashtag[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    enabled: !!session?.user,
  });

  const pathname = usePathname();
  if (pathname == "/explore") return null;

  if (session?.user) {
    return (
      <div className={st.trendBg}>
        <div className={st.trend}>
          <h3>나를 위한 트렌드</h3>
          {data?.map((trend) => (
            <Trend trend={trend} key={trend.tagId} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={st.trendBg}>
      <div className={st.noTrend}>트렌드를 가져올 수 없습니다.</div>
    </div>
  );
};

export default TrendSection;
