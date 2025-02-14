import Link from "next/link";
import st from "./Trend.module.css";

const Trend = () => {
  return (
    <Link href={`/search?q=트렌드`} className={st.container}>
      <div className={st.count}>실시간트렌드</div>
      <div className={st.title}>제로초</div>
      <div className={st.count}>1,234 posts</div>
    </Link>
  );
};

export default Trend;
