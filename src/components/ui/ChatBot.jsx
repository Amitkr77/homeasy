"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";
import { MessageCircle, X, HelpCircle, User, RefreshCw } from "lucide-react";

const chatbotData = {
  
    "helpDesk": [

       {
      "category": "Smart Solutions",
      "queries": [
        {
          "question": "What smart solutions do you offer?",
          "answer": "We provide end-to-end smart technology solutions including home automation, IoT device integration, voice-controlled environments, and AI-based security systems."
        },
        {
          "question": "Can I control devices remotely?",
          "answer": "Yes! You can control your smart devices remotely through our mobile app or web dashboard, anytime and anywhere."
        },
        {
          "question": "Do you integrate with Alexa or Google Assistant?",
          "answer": "Yes, our smart systems integrate seamlessly with Amazon Alexa and Google Assistant for effortless voice control."
        },
        {
          "question": "Is professional installation required?",
          "answer": "While most of our devices support plug-and-play setup, we also provide professional installation services for larger or complex automation setups."
        },
        {
          "question": "Can your system save energy?",
          "answer": "Definitely! Our smart automation features include power optimization, scheduling, and automatic device shutdown to reduce energy waste."
        }
      ]
    },
    {
      "category": "Pricing & Plans",
      "queries": [
        {
          "question": "How much does a smart home setup cost?",
          "answer": "The cost depends on your setup size and devices selected. Basic packages start from ₹9,999 and can be customized according to your needs."
        },
        {
          "question": "Do you offer monthly plans?",
          "answer": "Yes, we offer both one-time purchase and subscription-based plans for maintenance and cloud storage."
        },
        {
          "question": "Are there any installation charges?",
          "answer": "Installation is free for premium packages. For standard plans, a minimal setup charge may apply depending on location."
        },
        {
          "question": "Can I upgrade my plan later?",
          "answer": "Absolutely! You can upgrade or modify your plan anytime through your account dashboard or by contacting support."
        }
      ]
    },
    {
      "category": "Support & Troubleshooting",
      "queries": [
        {
          "question": "My device is not responding. What should I do?",
          "answer": "Try restarting the device and ensure it’s connected to Wi-Fi. If the issue persists, contact our support team for remote assistance."
        },
        {
          "question": "How do I reset my smart hub?",
          "answer": "Press and hold the reset button on the back of the hub for 10 seconds until the LED blinks, then reconnect it using the app."
        },
        {
          "question": "How can I contact customer support?",
          "answer": "You can reach our support team 24/7 via live chat, email at support@smartai.com, or by calling +91-99999-88888."
        },
        {
          "question": "Is there a warranty on devices?",
          "answer": "Yes, all our smart devices come with a 1-year standard warranty, which can be extended up to 3 years."
        }
      ]
    },
    {
      "category": "Account & Services",
      "queries": [
        {
          "question": "How can I create an account?",
          "answer": "Visit our website or mobile app, click on 'Sign Up,' and follow the simple registration steps using your email or phone number."
        },
        {
          "question": "Can I manage multiple properties from one account?",
          "answer": "Yes, our system supports multi-property management. You can monitor and control multiple smart setups from a single dashboard."
        },
        {
          "question": "How can I change my password?",
          "answer": "Go to the profile section, click on 'Change Password,' and follow the verification process to update your credentials."
        },
        {
          "question": "Can I share device access with family members?",
          "answer": "Yes, you can easily grant access to family members or guests by adding them in the 'Shared Users' section of your account settings."
        }
      ]
    }
  ]
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState(() => [
    {
      from: "bot",
      text: "Hello! How can I assist you today? Choose a category to get started.",
      quickReplies: chatbotData.helpDesk?.map((section) => section.category) || [],
      isCategory: true,
    },
  ]);
  const messagesEndRef = useRef(null);

  // Cache all queries for faster lookup
  const allQueries = useMemo(
    () =>
      chatbotData.helpDesk?.flatMap((section) =>
        section.queries.map((q) => ({ ...q, category: section.category }))
      ) || [],
    []
  );

  // Scroll to the latest message with a slight delay for DOM updates
  useEffect(() => {
    const timer = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => clearTimeout(timer);
  }, [messages]);

  // Clear error after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // Handle category selection
  const handleCategorySelection = async (category) => {
    if (!chatbotData.helpDesk) {
      setError("No help desk data available. Please try again later.");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const selectedSection = chatbotData.helpDesk.find(
        (section) => section.category === category
      );
      if (!selectedSection) {
        throw new Error("Category not found");
      }
      setMessages((prev) => [
        ...prev,
        { from: "user", text: category },
        {
          from: "bot",
          text: `Great! What's your question about ${category}?`,
          quickReplies: selectedSection.queries.map((q) => q.question) || [],
          isCategory: false,
        },
      ]);
    } catch (err) {
      setError("Failed to load category. Please try again.");
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Oops, something went wrong. Please select another category.",
          quickReplies: chatbotData.helpDesk?.map((section) => section.category) || [],
          isCategory: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle query selection with thank you message
  const handleQuerySelection = async (question) => {
    if (!allQueries.length) {
      setError("No queries available. Please try again later.");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const selectedQuery = allQueries.find((q) => q.question === question);
      if (!selectedQuery) {
        throw new Error("Question not found");
      }
      setMessages((prev) => [
        ...prev,
        { from: "user", text: question },
        {
          from: "bot",
          text: selectedQuery.answer,
          quickReplies: [],
          isCategory: false,
        },
        {
          from: "bot",
          text: "Thank you for your question! How else can I assist you?",
          quickReplies: chatbotData.helpDesk?.map((section) => section.category) || [],
          isCategory: true,
        },
      ]);
    } catch (err) {
      setError("Failed to load question. Please try again.");
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Sorry, I couldn’t find that question. Please try another.",
          quickReplies: chatbotData.helpDesk?.map((section) => section.category) || [],
          isCategory: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset conversation
  const resetConversation = () => {
    setMessages([
      {
        from: "bot",
        text: "Hello! How can I assist you today? Choose a category to get started.",
        quickReplies: chatbotData.helpDesk?.map((section) => section.category) || [],
        isCategory: true,
      },
    ]);
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {isOpen ? (
        <motion.div
          className="w-80 sm:w-[400px] bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200 flex flex-col max-h-[85vh]"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-600 text-white">
            <div className="flex items-center gap-2">
              <HelpCircle size={20} />
              <h2 className="font-semibold text-base">Support Assistant</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={resetConversation}
                aria-label="Reset conversation"
                className="p-2 rounded-full hover:bg-blue-700/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <RefreshCw size={18} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chatbot"
                className="p-2 rounded-full hover:bg-blue-700/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            className="p-5 flex-1 overflow-y-auto flex flex-col gap-4 bg-gray-50/80 backdrop-blur-sm relative"
            role="log"
            aria-live="polite"
          >
            {/* Loading Overlay */}
            {isLoading && (
              <motion.div
                className="absolute inset-0 bg-gray-100/50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <svg
                  className="w-8 h-8 text-blue-100 animate-spin"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v2m0 12v2m6-6h-2m-12 0H4"
                  />
                </svg>
              </motion.div>
            )}

            {messages.length === 0 ? (
              <div className="text-center text-sm text-gray-600">
                No messages yet.
              </div>
            ) : (
              <AnimatePresence>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col max-w-full"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div
                      className={`flex items-start gap-3 ${
                        msg.from === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {/* Icon */}
                      {msg.from === "bot" ? (
                        <HelpCircle
                          className="text-blue-600 flex-shrink-0"
                          size={22}
                          aria-hidden="true"
                        />
                      ) : (
                        <User
                          className="text-gray-600 flex-shrink-0 border border-gray-200 rounded-full p-1.5"
                          size={24}
                          aria-hidden="true"
                        />
                      )}

                      {/* Message bubble */}
                      <div
                        className={`p-3 rounded-2xl max-w-[80%] text-sm shadow-sm ${
                          msg.from === "user"
                            ? "bg-blue-100 text-blue-900"
                            : "bg-white text-gray-800 border border-gray-100"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>

                    {/* Quick replies */}
                    {msg.quickReplies?.length > 0 && (
                      <AnimatePresence>
                        <motion.div
                          className="flex flex-wrap gap-2 mt-3 pl-4 pt-2 pb-3 max-w-full overflow-x-auto scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-gray-100"
                          role="group"
                          aria-label={`Quick reply options for ${
                            msg.isCategory ? "categories" : "questions"
                          }`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          {msg.quickReplies.map((reply, i) => (
                            <motion.button
                              key={`${reply}-${i}`}
                              onClick={() => {
                                if (isLoading) return;
                                msg.isCategory
                                  ? handleCategorySelection(reply)
                                  : handleQuerySelection(reply);
                              }}
                              className={`
                                relative bg-blue-50 hover:bg-blue-100 text-blue-900 text-xs sm:text-sm 
                                px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 
                                ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 
                                focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-200 
                                disabled:opacity-50 disabled:cursor-not-allowed
                                ${isLoading ? "cursor-wait" : "cursor-pointer"}
                              `}
                              aria-label={`Select ${reply}`}
                              aria-disabled={isLoading}
                              disabled={isLoading}
                              title={reply.length > 20 ? reply : undefined}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  if (!isLoading) {
                                    msg.isCategory
                                      ? handleCategorySelection(reply)
                                      : handleQuerySelection(reply);
                                  }
                                }
                              }}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.2, delay: i * 0.05 }}
                              whileHover={{ scale: isLoading ? 1 : 1.05 }}
                              whileTap={{ scale: isLoading ? 1 : 0.95 }}
                            >
                              <span className="truncate max-w-[160px] sm:max-w-[220px]">
                                {reply}
                              </span>
                              {isLoading && (
                                <motion.span
                                  className="absolute right-2 top-1/2 -translate-y-1/2"
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                >
                                  <svg
                                    className="w-4 h-4 text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M12 4v2m0 12v2m6-6h-2m-12 0H4"
                                    />
                                  </svg>
                                </motion.span>
                              )}
                            </motion.button>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    )}
                    {/* Fallback for no quick replies */}
                    {!msg.quickReplies?.length && msg.from === "bot" && (
                      <motion.div
                        className="text-sm text-gray-600 mt-2 pl-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        No further options available.{" "}
                        <button
                          onClick={resetConversation}
                          className="text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                          aria-label="Start over"
                        >
                          Start over
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
            {error && (
              <motion.div
                className="text-center text-sm text-red-600 bg-red-50 p-2 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {error}
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </motion.div>
      ) : (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-br from-blue-500 via-blue-400 to-blue-500 text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          aria-label="Open chatbot"
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle size={28} />
        </motion.button>
      )}
    </div>
  );
}