import React, { useState } from "react";
import "./App.css";

function App() {
  const [originalEmail, setOriginalEmail] = useState("");
  const [tone, setTone] = useState("");
  const [generatedEmail, setGeneratedEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRequest = {
      emailContent: originalEmail,
      tone: tone,
    };

    try {
      const response = await fetch("http://localhost:8080/api/email/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailRequest),
      });

      const data = await response.text();
      setGeneratedEmail(data);
    } catch (error) {
      console.error("Error:", error);
      setGeneratedEmail("An error occurred while generating the email.");
    }
  };

  return (
    <div className="App">
      <h1>Email Assistance Tool</h1>
      <form onSubmit={handleSubmit} className="email-form">
        <label>
          Original Email:
          <textarea
            value={originalEmail}
            onChange={(e) => setOriginalEmail(e.target.value)}
            placeholder="Paste your email here..."
            rows="5"
            required
          ></textarea>
        </label>
        <label>
          Tone:
          <input
            type="text"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            placeholder="e.g., professional, friendly"
            required
          />
        </label>
        <button type="submit">Generate Email</button>
      </form>
      {generatedEmail && (
        <div className="response-section">
          <h2>Generated Email:</h2>
          <p>{generatedEmail}</p>
        </div>
      )}
    </div>
  );
}

export default App;
