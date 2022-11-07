import React, { useState } from "react";
import axios from "axios";
import Results from "./results";
import "./dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("Freedom");
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);

    if (!event.target.value) {
      setResult(null);
    }
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder={`For example: ${keyword}`}
              onChange={handleKeywordChange}
            />
          </form>
        </section>
        <Results results={result} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
