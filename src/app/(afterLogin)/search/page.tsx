import BackButton from "../_components/BackButton";
import SearchForm from "../_components/SearchForm";
import SearchResult from "./_components/SearchResult";
import Tap from "./_components/Tab";
import st from "./search.module.css";

interface SearchProps {
  searchParams: Promise<{ q: string; f?: string; pf?: string }>;
}

const Search = async ({ searchParams }: SearchProps) => {
  const query = await searchParams;

  return (
    <main className={st.main}>
      <div className={st.searchTop}>
        <div className={st.searchZone}>
          <div className={st.buttonZone}>
            <BackButton />
          </div>
          <div className={st.formZone}>
            <SearchForm q={query.q} />
          </div>
        </div>
        <Tap />
      </div>
      <div className={st.list}>
        <SearchResult searchParams={query} />
      </div>
    </main>
  );
};

export default Search;
