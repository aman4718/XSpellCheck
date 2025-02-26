import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const XSpellCheck = () => {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    checkSpelling(inputText);
  };

  const checkSpelling = (inputText) => {
    const words = inputText.split(" ");
    for (let word of words) {
      const lowerWord = word.toLowerCase();
      if (customDictionary[lowerWord]) {
        setSuggestion(`Did you mean: ${customDictionary[lowerWord]}?`);
        return;
      }
    }
    setSuggestion("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>XSpellCheck</h2>
      <textarea
        value={text}
        onChange={handleTextChange}
        rows="5"
        cols="40"
        placeholder="Type something here..."
        style={{ fontSize: "16px", padding: "10px" }}
      />
      {suggestion && <p style={{ color: "red", marginTop: "10px" }}>{suggestion}</p>}
    </div>
  );
};

export default XSpellCheck;
