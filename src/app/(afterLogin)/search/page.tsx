import BackButton from "../_components/BackButton";
import Post from "../_components/Post";
import SearchForm from "../_components/SearchForm";
import Tap from "./_components/Tab";
import st from "./search.module.css";

interface SearchProps {
  searchParams: Promise<{ q: string; f?: string; pf?: string }>;
}

const Search = async ({ searchParams }: SearchProps) => {
  const { q } = await searchParams;

  return (
    <main className={st.main}>
      <div className={st.searchTop}>
        <div className={st.searchZone}>
          <div className={st.buttonZone}>
            <BackButton />
          </div>
          <div className={st.formZone}>
            <SearchForm q={q} />
          </div>
        </div>
        <Tap />
      </div>
      <div className={st.list}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        {/*<SearchResult searchParams={searchParams} />*/}
      </div>
    </main>
  );
};

export default Search;
