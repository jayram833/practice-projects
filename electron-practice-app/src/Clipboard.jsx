import { useState } from "react"

function Clipboard() {
    const [text, setText] = useState("");
    const [pastedText, setPastedText] = useState("");


    async function handleCopy() {
        await window.electron.copyText(text);
        console.log("Text copied to clipboard");
    }

    async function  handlePaste() {
       const textFromClipboard =  await window.electron.pasteText();
        console.log("Text pasted to clipboard");
        setPastedText(textFromClipboard);
    }

    async function handleShowDialog() {
        await window.electron.showDialog(pastedText);
    }
    return (
        <div>
            <input type="text" value={text} onChange={e=> setText(e.target.value)} placeholder="you name" className="bg-white w-80 rounded-md"/>
            <div >
                <button onClick={handleCopy} className="bg-lime-400 px-2 py-1 rounded-md cursor-pointer">Copy to clipboard</button>
                <button onClick={handlePaste} className="bg-lime-400 px-2 py-1 rounded-md cursor-pointer">Paste from clipboard</button>
            </div>
            <p>Pasted Text: {pastedText}</p>

            <button onClick={handleShowDialog} className="bg-red-400 px-2 py-1 rounded-md cursor-pointer">Show Dialog</button>
        </div>
    )
}

export default Clipboard;
