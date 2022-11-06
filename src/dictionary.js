import React, { useState } from "react";
import axios from "axios";
import Results from "./results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKewordChange(event) {
    setKeyword(event.target.value);

    if (!event.target.value) {
      setResult(null);
    }
  }
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input type="search" autoFocus={true} onChange={handleKewordChange} />
        </form>
      </section>
      <Results results={result} />
    </div>
  );
}
