import React, { useState } from "react";

import "./search-panel.css";

const SearchPanel = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const onSearchChange = (e) => {
    const term = e.target.value;
    setTerm(term);
    onSearch(term);
  };
  return (
    <div className="search-panel">
      <input
        placeholder="search"
        className="search-input"
        value={term}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchPanel;
