import React from "react";
import Meaning from "./meaning";
import Synonyms from "./synonyms";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <h2>{props.results[0].word}</h2>
        {props.results[0].meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Synonyms synonyms={meaning.synonyms} />
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
