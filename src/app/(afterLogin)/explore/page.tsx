import SearchForm from "../_components/SearchForm";
import TrendSection from "./_components/TrendSection";
import st from "./explore.module.css";

const Explore = () => {
  return (
    <main className={st.main}>
      <div className={st.formZone}>
        <SearchForm />
      </div>
      <div className={st.trend}>
        <h3>나를 위한 트렌드</h3>
        <TrendSection />
      </div>
    </main>
  );
};

export default Explore;
