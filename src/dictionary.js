import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`You are searching fo ${keyword} definition`);
  }
  function handleKewordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKewordChange} />
      </form>
    </div>
  );
}
