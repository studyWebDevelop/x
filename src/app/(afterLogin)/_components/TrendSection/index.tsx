import Trend from "../Trend";
import st from "./TrendSction.module.css";

const TrendSection = () => {
  return (
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
  );
};

export default TrendSection;
