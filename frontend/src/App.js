import React, { useState } from "react";
import axios from "axios";

function App() {

  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");

  const [source, setSource] = useState("en");
  const [target, setTarget] = useState("ta");

  const translateText = async () => {

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/translate",
        {
          text,
          source,
          target
        }
      );

      setTranslated(response.data.translated_text);

    } catch (error) {

      console.log(error);

    }
  };

  const copyText = () => {

    navigator.clipboard.writeText(translated);

    alert("Copied!");

  };

  return (

    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">

      {/* Navbar */}

      <nav className="flex justify-between items-center p-6 text-white">

        <h1 className="text-3xl font-bold">
          🌍 LingualAI
        </h1>

        <div className="space-x-6">

          

        </div>

      </nav>

      {/* Hero Section */}

      <div className="text-center text-white mt-10">

        <h1 className="text-5xl font-bold">
          AI Language Translation Tool
        </h1>

        <p className="mt-4 text-lg">
          Translate languages instantly using AI powered translation.
        </p>

      </div>

      {/* Translation Card */}

      <div className="bg-white w-11/12 md:w-3/4 mx-auto mt-12 p-8 rounded-3xl shadow-2xl">

        <div className="grid md:grid-cols-2 gap-6">

          {/* Input */}

          <div>

            <h2 className="text-xl font-semibold mb-3">
              Enter Text
            </h2>

            <textarea
              className="w-full h-56 border rounded-xl p-4 outline-none"
              placeholder="Type text..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

          </div>

          {/* Output */}

          <div>

            <h2 className="text-xl font-semibold mb-3">
              Translation
            </h2>

            <div className="w-full h-56 border rounded-xl p-4 bg-gray-100 overflow-auto">

              {translated}

            </div>

          </div>

        </div>

        {/* Language Selectors */}

        <div className="grid md:grid-cols-3 gap-4 mt-6">

          <select
            className="p-3 border rounded-xl"
            onChange={(e) => setSource(e.target.value)}
          >

            <option value="en">English</option>
            <option value="ta">Tamil</option>
            <option value="hi">Hindi</option>
            <option value="te">Telugu</option>
            <option value="kn">Kannada</option>

          </select>

          <button
            className="bg-purple-600 text-white p-3 rounded-xl hover:bg-purple-700 transition"
            onClick={translateText}
          >
            Translate
          </button>

          <select
            className="p-3 border rounded-xl"
            onChange={(e) => setTarget(e.target.value)}
          >

            <option value="ta">Tamil</option>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="te">Telugu</option>
            <option value="kn">Kannada</option>

          </select>

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-6">

          <button
            onClick={copyText}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            Copy Translation
          </button>

        </div>

      </div>

      {/* Features */}

      <div className="grid md:grid-cols-4 gap-6 w-11/12 md:w-3/4 mx-auto mt-16 mb-16">

        <div className="bg-white p-6 rounded-2xl shadow-xl">

          <h2 className="text-xl font-bold">
            ⚡ Fast
          </h2>

          <p className="mt-2">
            Instant AI translations.
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl">

          <h2 className="text-xl font-bold">
            🌐 Multi Language
          </h2>

          <p className="mt-2">
            Supports many languages.
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl">

          <h2 className="text-xl font-bold">
            🤖 AI Powered
          </h2>

          <p className="mt-2">
            Uses AI translation models.
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl">

          <h2 className="text-xl font-bold">
            📋 Copy Feature
          </h2>

          <p className="mt-2">
            Easily copy translated text.
          </p>

        </div>

      </div>

      {/* Footer */}

      <footer className="text-center text-white pb-8">

        © 2026 Anuradha | CodeAlpha AI Internship

      </footer>

    </div>
  );
}

export default App;