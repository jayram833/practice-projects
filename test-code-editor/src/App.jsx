import { useState, useEffect } from "react";
import SimpleCodeEditor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/themes/prism.css";
import "./prism-custom.css";

const App = () => {
  const [code, setCode] = useState("console.log('Hello, world!');");
  const [output, setOutput] = useState("");
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    const newWorker = new Worker(
      new URL("./worker/worker.js", import.meta.url)
    );
    newWorker.onmessage = (e) => {
      const { success, logs, error } = e.data;
      if (success) {
        setOutput((prevOutput) => prevOutput + "\n" + logs);
      } else {
        setOutput((prevOutput) => prevOutput + "\n" + `Error: ${error}`);
      }
    };

    setWorker(newWorker);

    return () => newWorker.terminate();
  }, []);

  const handleRunCode = () => {
    if (worker) {
      worker.postMessage({ code });
    }
  };

  return 
    <div className="app">
      <SimpleCodeEditor
        value={code}
        onValueChange={(newCode) => setCode(newCode)}
        highlight={(newCode) => highlight(newCode, languages.js)}
        padding={10}
        style={{
          fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
          fontSize: "1.2rem",
          minHeight: "200px",
          backgroundColor: "rgb(15, 23, 42)",
          color: "#e0e0e0",
          borderRadius: "4px",
          border: "1px solid #333",
          overflow: "auto",
        }}
      />
      <br />
      <button onClick={handleRunCode} className="btn-run">
        Run Code
      </button>
      <div style={{ backgroundColor: "rgb(15, 23, 42)", color: "#fff" }}>
        <h3>Console Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default App;
