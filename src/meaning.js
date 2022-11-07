import React from "react";
import Synonyms from "./synonyms";
import "./meaning.css";

export default function Meaning(props) {
  // console.log(props.meaning);
  // const items=;
  const renderedExample = (example) => {
    if (example) {
      return <div className="example">{example}</div>;
    } else return "";
  };

  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <Synonyms synonyms={props.meaning.synonyms} />
      <div>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="definition">{definition.definition}</div>
              {renderedExample(definition.example)}
              <br />

              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
