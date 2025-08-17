// Chatbot.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import botAvatar from "../assets/botAvatar.jpg"

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "bot",
      text: "👋 Hi! Welcome to Samiul's Portfolio. Ask me about my projects, skills, or experience!",
    },
  ]); // ✅ default welcome message
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const messagesEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleClose = () => setIsOpen(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = input.trim();
    if (!userMessage) return;

    setInput("");

    // Add user message
    setMessages((history) => [
      ...history,
      { sender: "user", text: userMessage },
    ]);

    // Immediately show typing indicator
    setIsTyping(true);

    // Call API
    generateBotResponse({
      history: [...messages, { sender: "user", text: userMessage }],
    });
  };

  const generateBotResponse = async ({ history }) => {
    const updateHistory = (text) => {
      setMessages((prev) => [...prev, { sender: "bot", text }]);
      setIsTyping(false); // Stop typing indicator
    };

    // Format history for API
    const formattedHistory = history.map(({ sender, text }) => ({
      role: sender === "user" ? "user" : "model",
      parts: [{ text }],
    }));

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: formattedHistory }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error?.message || "Something went wrong!");
      }

      const apiResponseText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
        "⚠️ No response from AI";

      updateHistory(apiResponseText);
    } catch (error) {
      console.error(error);
      updateHistory("⚠️ Sorry, I couldn't fetch a response.");
    }
  };

  if (!isOpen) return null;

  // const gradientStyle = {
  //   background: "linear-gradient(135deg, #41b362, #2fa84f)",
  // };

  return (
   <div className="flex flex-col w-full max-w-md h-[600px] rounded-2xl shadow-xl border overflow-hidden mx-auto mt-10">
      {/* Header */}
      <div className="flex justify-between items-center p-4 text-white bg-gradient-to-r from-green-400 to-blue-500">
        <h2 className="font-bold text-lg">Samiul's Portfolio Assistant</h2>
        <button onClick={handleClose} className="text-white hover:text-gray-200 text-xl">
          ✖
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 bg-gray-100 overflow-y-auto space-y-3">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`flex items-end ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "bot" && (
              <img
                src={botAvatar}
                alt="bot"
                className="w-8 h-8 rounded-full mr-2"
              />
            )}
            <div
              className={`p-3 rounded-xl max-w-[75%] ${
                msg.sender === "user"
                  ? "bg-gradient-to-r from-green-400 to-blue-500 text-white"
                  : "bg-white text-gray-900 shadow-sm"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}

        {isTyping && (
          <motion.div
            className="flex items-center justify-start mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={botAvatar}
              alt="bot"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div className="bg-white text-gray-500 italic p-2 rounded-xl shadow-sm">
              AI is typing...
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleFormSubmit}
        className="flex items-center p-4 gap-2 border-t bg-white"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <motion.button
          type="submit"
          className="p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full text-white flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiSend size={20} />
        </motion.button>
      </form>
    </div>
  );
};

export default Chatbot;