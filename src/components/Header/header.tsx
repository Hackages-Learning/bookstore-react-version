import React from "react";
import Search from "../Search/search";

export const Header = ({
  title,
  onSearch,
}: {
  title: string;
  onSearch: (term: string) => void;
}) => {
  return (
    <header>
      <div className="container">
        <a className="logo" href="/">
          📚 BookStore
        </a>
        <Search onSearch={onSearch} />
      </div>
    </header>
  );
};
