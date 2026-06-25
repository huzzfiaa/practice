import React, { useState } from "react";
import api from "./config/axios";

const App = () => {
  const [input, setInput] = useState("");
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState("");

  // typing handler
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // button click handler
  const handleClick = async () => {
    setIdea(input);
    setLoading(true);
    setError(null);

    try {
      const res = await api.post(
        `/models/gemini-1.5-flash:generateContent?key=${import.meta.env.VITE_API_KEY}`,
        {
          contents: [
            {
              parts: [{ text: input }]
            }
          ]
        }
      );

      console.log(res.data)
    //  const text =
//res.data.candidates[0].content.parts[0].text;

      setResult(text);
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px"
      }}
    >
      {/* INPUT */}
      <input
        value={input}
        onChange={handleChange}
        placeholder="Enter idea..."
        style={{
          padding: "10px",
          width: "300px"
        }}
      />

      {/* BUTTON */}
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Get Response
      </button>

      {/* LOADING */}
      {loading && <p>Loading...</p>}

      {/* ERROR */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* RESULT BOX */}
      <div
        style={{
          marginTop: "10px",
          padding: "10px",
          width: "300px",
          minHeight: "80px",
          border: "1px solid black"
        }}
      >
        {result}
      </div>
    </div>
  );
};

export default App;