"use client";

import { Hashtag } from "@/model/Hashtag";
import { useQuery } from "@tanstack/react-query";
import { getTrends } from "../../_components/TrendSection/_lib/getTrends";
import Trend from "../../_components/Trend";

const TrendSection = () => {
  const { data } = useQuery<Hashtag[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return data?.map((trend) => <Trend trend={trend} key={trend.tagId} />);
};

export default TrendSection;
