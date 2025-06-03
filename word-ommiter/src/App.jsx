import { useEffect, useState } from "react";

function App() {
  const OMITTED_WORDS = ["a", "the", "and", "or", "but"];

  const [inputText, setInputText] = useState("");
  const [omitWords, setOmitWords] = useState(true);
  const [outputText, setOutputText] = useState("");

  function toggleOmitWords() {
    setOmitWords(!omitWords);
    handleTextProcess()
  }

  function handleTextProcess() {
    const wordsArr = inputText.split(" ");
    if (omitWords) {
      const filteredwords = wordsArr.filter(w => !OMITTED_WORDS.includes(w));
      setOutputText(filteredwords.join(" "));
    } else {
      setOutputText(inputText)
    }
  }

  function handleChange(e) {
    setInputText(e.target.value);
    handleTextProcess();
  }

  function handleClear() {
    setInputText("");
    setOutputText("")
  }
  useEffect(() => {
    handleTextProcess();
  }, [inputText, omitWords]);

  return (
    <div>
      <h1>World Ommiter</h1>
      <textarea onChange={handleChange} value={inputText} placeholder="enter sentense"></textarea>
      <div>
        <button onClick={toggleOmitWords}>{omitWords ? " Show All Words " : "Omit Words"}</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <h2>Output:</h2>
      <h2>{outputText}</h2>
    </div>
  )
}

export default App
