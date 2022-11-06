import React from "react";
import Synonyms from "./synonyms";

export default function Meaning(props) {
  // console.log(props.meaning);
  // const items=;
  const renderedExample = (example) => {
    if (example) {
      return (
        <>
          <strong>Example:</strong>
          <em>{example}</em>
        </>
      );
    } else return "";
  };

  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      <Synonyms synonyms={props.meaning.synonyms} />
      <div>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <strong>Definition:</strong> {definition.definition}
                <br />
                {renderedExample(definition.example)}
                <Synonyms synonyms={definition.synonyms} />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
