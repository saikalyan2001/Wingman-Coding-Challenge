import React, { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

const ChatModal = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const generateBotReply = (userMessage) => {
    const responses = {
      "open the chart": "Sure! Opening the chart for you.",
      "open sales page": "Got it! Redirecting you to the sales page.",
      hello: "Hi there! How can I help you today?",
      help: "Of course! Let me know what you need assistance with.",
    };

    for (const [key, response] of Object.entries(responses)) {
      if (userMessage.toLowerCase().includes(key)) {
        return response;
      }
    }

    return "I'm here to assist you. Could you please clarify your request?";
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    const userMessage = input;
    setInput("");

    setTimeout(() => {
      const botResponseText = generateBotReply(userMessage);
      const botResponse = { sender: "bot", text: botResponseText };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 500);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-3/4 max-w-lg p-5 rounded-lg shadow-lg flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Chat</h2>
          <button
            onClick={onClose}
            className="text-red-500 font-bold text-lg hover:text-red-700"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="flex-grow overflow-y-auto bg-gray-100 p-4 rounded shadow-inner">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`my-2 p-2 rounded-md ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-200 text-gray-800 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="flex mt-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow border border-gray-300 rounded p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
