import React from "react";

export default function QuestionResponses(props) {
  return (
    <div>
      <button onClick={props.handleButton}>{props.answer}</button>
    </div>
  );
}
/*  {props.responses.answerOptions.map((answerOption) => {
        return (
          <button key={answerOption.answer} onClick={props.onClick}>
            {answerOption.answer}
          </button>
        );
      })}*/
