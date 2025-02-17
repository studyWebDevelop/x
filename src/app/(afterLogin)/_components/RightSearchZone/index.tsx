"use client";

import { usePathname } from "next/navigation";
import st from "./RightSearchZone.module.css";
import SearchForm from "../SearchForm";

const RightSearchZone = () => {
  const pathname = usePathname();

  const onChangeFollow = () => {};
  const onChangeAll = () => {};

  if (pathname == "/explore") return null;

  if (pathname == "/search") {
    return (
      <div style={{ color: "black" }}>
        <h5 className={st.filterTitle}>검색 필터</h5>
        <div className={st.filterSection}>
          <div>
            <label>사용자</label>
            <div className={st.radio}>
              <div>모든 사용자</div>
              <input
                type="radio"
                name="pf"
                defaultChecked
                onChange={onChangeAll}
              />
            </div>
            <div className={st.radio}>
              <div>내가 팔로우하는 사람들</div>
              <input
                type="radio"
                name="pf"
                value="on"
                onChange={onChangeFollow}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: 60, width: "inherit" }}>
      <SearchForm />
    </div>
  );
};

export default RightSearchZone;
