import Link from "next/link";
import st from "./Trend.module.css";
import { Hashtag } from "@/model/Hashtag";

interface TrendProps {
  trend: Hashtag;
}

const Trend = ({ trend }: TrendProps) => {
  return (
    <Link href={`/search?q=${trend.title}`} className={st.container}>
      <div className={st.count}>실시간트렌드</div>
      <div className={st.title}>{trend.title}</div>
      <div className={st.count}>{trend.count.toLocaleString()} posts</div>
    </Link>
  );
};

export default Trend;
