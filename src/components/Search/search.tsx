import React, { ChangeEvent } from "react";
import SearchIcon from "../../assets/search.svg";

const Search = ({ onSearch }: { onSearch: (term: string) => void }) => {
  return (
    <>
      <div className="search-box">
        <label htmlFor="search-input" className="search-icon">
          <img src={SearchIcon} alt="" />
        </label>
        <input
          id="search-input"
          placeholder="Search for title, author, tags etc"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onSearch(e.target.value)
          }
        />
      </div>
    </>
  );
};

export default Search;
