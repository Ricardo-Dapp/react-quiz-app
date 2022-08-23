import React from "react";

export default function ShowResults(props) {
  return (
    <div>
      <h2>
        You got {props.count} / {props.questions.length} answers correct
      </h2>
      <button onClick={props.handleButton}>Retry</button>
    </div>
  );
}
