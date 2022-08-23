import React from "react";

export default function QuestionPrompt(props) {
  return (
    <div>
      <h2>Question {props.question.id}</h2>
      <h4>{props.question.question}</h4>
    </div>
  );
}
