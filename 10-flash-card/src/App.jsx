import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(9103);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="flashcards">
      {questions.map((question) => {
        return (
          <div
            key={question.id}
            className={question.id === selectedId ? "selected" : ""}
            onClick={() => handleClick(question.id)}
          >
            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </div>
        );
      })}
    </div>
  );
}

{
  /*
  
    const [isClick, setIsClick] = useState(false);
  const [elementId, setElementId] = useState(123);
  function handleClick(e) {
    const elmId = Number(e.target.id);
    setIsClick(!isClick);
    setElementId(elmId);
  
  <FlashCard
q={q}
key={q.id}
addClass={isClick && q.id === elementId ? "selected" : ""}
click={handleClick}
isClick={isClick}
elementId={elementId}
/> */
}

// function FlashCard({ q, click, addClass, isClick, elementId }) {
//   return (
//     <div id={q.id} onClick={click} className={addClass}>
//       {isClick && elementId === q.id ? q.answer : q.question}
//     </div>
//   );
// }
