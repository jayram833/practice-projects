import { useState } from "react";
import data from "./data.json";
import Question from "./Question";
import Options from "./Options";
import Button from "./Button";
import ResultWindow from "./ResultWindow";

// console.log(data)

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);


  function handlePrev() {
    setCurrentQuestion(prev => prev - 1)
  }
  function handleNext() {
    if (selectedOption === data[currentQuestion].answer) {
      setScore(prevScore => prevScore + 1)
    }
    setCurrentQuestion(prev => prev + 1);
  }

  function handleSubmitTest() {
    if (selectedOption === data[currentQuestion].answer) {
      setScore(prevScore => prevScore + 1)
    }
    setCurrentQuestion(prev => prev + 1);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[600px]">
        <h1 className="font-semibold text-4xl text-center" > Quiz App</h1>
        {currentQuestion == data.length ? <ResultWindow score={score} /> :
          <div>
            <Question questionNumber={currentQuestion} question={data[currentQuestion].question} />
            <Options options={data[currentQuestion].options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />

            <div className=" flex justify-between">
              <Button label="Prev" onClick={handlePrev} />
              {currentQuestion === data.length - 1 ? <Button label="Submit Test" onClick={handleSubmitTest} /> : <Button label="Next" onClick={handleNext} />}
            </div>
          </div>}
      </div >
    </div >
  )
}

export default App
