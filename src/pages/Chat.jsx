// src/App.jsx
import { useState, useRef, useEffect } from "react";
import { useGetBotResponseMutation } from "../app/api/chatApi";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatLogRef = useRef(null);

  // Get the mutation hook
  const [getBotResponse, { isLoading }] = useGetBotResponseMutation();

  // Function to handle sending the message
  const sendMessage = async () => {
    if (input.trim() === "") return;

    // Add the user's message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: "user" },
    ]);
    setInput("");

    try {
      // Add a placeholder for the bot's typing indicator
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Typing...", sender: "bot-typing" },
      ]);

      // Get the bot's response using the RTK Query mutation
      const response = await getBotResponse(input);

      // Replace the typing indicator with the bot's actual response
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.sender !== "bot-typing")
      );
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data.response, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error:", error);

      // Replace the typing indicator with an error message
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.sender !== "bot-typing")
      );
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Sorry, something went wrong. Please try again.",
          sender: "bot",
        },
      ]);
    }
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-log" ref={chatLogRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender.replace("-", " ")}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          disabled={isLoading}
        />
        <button
          onClick={sendMessage}
          disabled={isLoading || input.trim() === ""}
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default Chat;
