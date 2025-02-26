import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [inputText, setInputText] = useState("");

  return (
    <nav className="navbar">
      <img src="" alt="logo" style={{ width: "250px" }} />
      <span>
        <input
          type="text"
          placeholder="Search Recipe..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button>Search</button>
      </span>
      <span>
        <span></span>
        <button>Add Recipe</button>
        <span></span>
        <button>Bookmarks</button>
      </span>
    </nav>
  );
}

export default Navbar;
