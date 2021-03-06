import { useEffect, useState } from "react";
import { FreeInputQuestion } from "./FreeInputQuestion";
import { SingleChoiceQuestion } from "./SingleChoiceQuestion";

const questions = [
  {
    text: "Enter your name",
    id: "name",
  },
  {
    text: "Enter your age",
    id: "age",
  },
  {
    text: "Enter your favorite food",
    id: "food",
  },
  {
    text: "Enter your city",
    id: "city",
  },
];

const singleChoiceQuestions = [
  {
    id: "singleChoiceQuestion1",
    question: "Make a choice:",
    options: [
      {
        text: "Option A",
        value: "A",
        id: "option-a",
      },
      {
        text: "Option B",
        value: "B",
        id: "option-b",
      },
      {
        text: "Option C",
        value: "C",
        id: "option-c",
      },
    ],
  },
  {
    id: "question1",
    question: "Make the right choice:",
    options: [
      {
        id: "blue-pill",
        text: "Blue pill",
        value: "Blue",
      },
      {
        id: "red-pill",
        text: "Red pill",
        value: "Red",
      },
    ],
  },
  {
    id: "question2",
    question: "Make the right choice:",
    options: [
      {
        id: "blue-pill",
        text: "Blue pill",
        value: "Blue",
      },
      {
        id: "red-pill",
        text: "Red pill",
        value: "Red",
      },
      {
        id: "pink-pill",
        text: "Pink pill",
        value: "Pink",
      },
    ],
  },
];

export function Quiz(props) {
  const [state, setState] = useState({});

  useEffect(() => {
    props.onStateChange();
  }, [props, state]);

  const handleAnswer = (id, choiceValue) => {
    setState((currentState) => ({
      ...currentState,
      [id]: choiceValue,
    }));
  };

  const handleSubmit = () => {
    props.onSubmit(state, props.id);
  };

  const questionsMap = questions.map((question) => {
    return (
      <FreeInputQuestion
        key={question.id}
        id={question.id}
        text={question.text}
        onKeyUp={handleAnswer}
      />
    );
  });

  const singleChoiceQuestionsMap = singleChoiceQuestions.map((question) => {
    return (
      <SingleChoiceQuestion
        key={question.id}
        id={question.id}
        question={question.question}
        options={question.options}
        onChoice={handleAnswer}
      />
    );
  });

  return (
    <div>
      {questionsMap}
      {singleChoiceQuestionsMap}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
