import React from "react";

export default function Synonyms(props) {
  //   console.log(props.synonyms);
  if (props.synonyms.length) {
    return (
      <div>
        <strong>Synonym:</strong>
        <ul className="synonyms">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
