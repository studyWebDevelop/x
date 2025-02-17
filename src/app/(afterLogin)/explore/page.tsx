import SearchForm from "../_components/SearchForm";
import Trend from "../_components/Trend";
import st from "./explore.module.css";

const Explore = () => {
  return (
    <main className={st.main}>
      <div className={st.formZone}>
        <SearchForm />
      </div>
      <div className={st.trend}>
        <h3>나를 위한 트렌드</h3>
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
    </main>
  );
};

export default Explore;
