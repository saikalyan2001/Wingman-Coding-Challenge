import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

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

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-6 sm:p-20 mt-20 ml-14 mr-4 lg:ml-20 lg:mr-4">
      <div className="flex-grow overflow-y-auto bg-white sm:p-4 rounded shadow-md">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mx-10 my-10 sm:my-2 p-2  rounded-md ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200 text-gray-800 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 sm:flex-row mt-4">
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
  );
};

export default Chat;
