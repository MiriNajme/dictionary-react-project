import React from "react";
import Meaning from "./meaning";
import Phonetic from "./phonetic";

export default function Results(props) {
  const renderedPhonetic = (phonetic) => {
    if (phonetic?.text?.length && phonetic?.audio?.length) {
      return <Phonetic phonetic={phonetic} />;
    }
    return null;
  };
  if (props.results) {
    return (
      <div className="results">
        <section>
          <h2>{props.results[0].word}</h2>
          {props.results[0].phonetics.map(function (phonetic, index) {
            return <div key={index}>{renderedPhonetic(phonetic)}</div>;
          })}
        </section>
        {props.results[0].meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
