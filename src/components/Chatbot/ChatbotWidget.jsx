import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsFillChatFill } from 'react-icons/bs';
import { IoClose, IoSend } from 'react-icons/io5';
import { sendMessageToAI } from '../../services/aiService';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Shankar's AI assistant. I can answer questions about his skills, projects, experience, and background. What would you like to know? 🚀",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const widgetRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Save chat history to localStorage
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem('chatHistory', JSON.stringify(messages));
    }
  }, [messages]);

  // Load chat history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('chatHistory');
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory);
        if (parsed.length > 1) {
          setMessages(parsed);
        }
      } catch (error) {
        console.error('Error loading chat history:', error);
      }
    }
  }, []);

  // Close chatbot when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    const currentInput = inputValue;
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      console.log('Sending message to AI:', currentInput);
      
      // Get AI response with chat history context
      const aiResponse = await sendMessageToAI(currentInput, messages);
      
      console.log('AI Response received:', aiResponse);

      const botResponse = {
        text: aiResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
      const errorResponse = {
        text: "Sorry, I encountered an error. Please try again or contact Shankar directly through the contact form! 📧",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearHistory = () => {
    setMessages([
      {
        text: "Hi! I'm Shankar's AI assistant. I can answer questions about his skills, projects, experience, and background. What would you like to know? 🚀",
        isBot: true,
        timestamp: new Date()
      }
    ]);
    localStorage.removeItem('chatHistory');
  };

  return (
    <div ref={widgetRef} style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999 }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className='bg-[#1a1a2e] rounded-2xl shadow-2xl overflow-hidden mb-4'
            style={{ width: '380px', height: '550px' }}
          >
            {/* Chat Header */}
            <div className='bg-gradient-to-r from-[#915EFF] to-[#7c3aed] p-4 flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='relative'>
                  {/* Custom AI Logo */}
                  <div className='w-10 h-10 rounded-full bg-white flex items-center justify-center'>
                    <span className='text-[#915EFF] font-black text-sm'>AI</span>
                  </div>
                  <span className='absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white'></span>
                </div>
                <div>
                  <h3 className='text-white font-bold text-lg'>AI Assistant</h3>
                  <p className='text-white/80 text-xs'>Ask me anything! 🤖</p>
                </div>
              </div>
              <div className='flex gap-2'>
                <button
                  onClick={clearHistory}
                  className='text-white hover:bg-white/20 p-2 rounded-lg transition-all text-xs'
                  title='Clear Chat'
                >
                  🗑️
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className='text-white hover:bg-white/20 p-2 rounded-lg transition-all'
                >
                  <IoClose size={24} />
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <div className='p-4 h-[400px] overflow-y-auto bg-[#0f0f1e] custom-scrollbar'>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.isBot
                        ? 'bg-[#2a2a3e] text-white rounded-bl-none'
                        : 'bg-gradient-to-r from-[#915EFF] to-[#7c3aed] text-white rounded-br-none'
                    }`}
                  >
                    <p className='text-sm whitespace-pre-wrap'>{msg.text}</p>
                    <p className='text-xs opacity-50 mt-1'>
                      {new Date(msg.timestamp).toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className='flex justify-start mb-4'>
                  <div className='bg-[#2a2a3e] p-3 rounded-2xl rounded-bl-none'>
                    <div className='flex gap-1'>
                      <span className='w-2 h-2 bg-gray-400 rounded-full animate-bounce' style={{ animationDelay: '0ms' }}></span>
                      <span className='w-2 h-2 bg-gray-400 rounded-full animate-bounce' style={{ animationDelay: '150ms' }}></span>
                      <span className='w-2 h-2 bg-gray-400 rounded-full animate-bounce' style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            {messages.length === 1 && (
              <div className='px-4 pb-2 flex gap-2 flex-wrap bg-[#0f0f1e]'>
                {['Skills', 'Projects', 'Experience'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setInputValue(`Tell me about ${suggestion.toLowerCase()}`)}
                    className='text-xs bg-[#2a2a3e] text-white px-3 py-1 rounded-full hover:bg-[#915EFF] transition-all'
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className='p-4 bg-[#1a1a2e] border-t border-gray-700'>
              <div className='flex gap-2'>
                <input
                  type='text'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder='Ask me anything...'
                  disabled={isTyping}
                  className='flex-1 bg-[#2a2a3e] text-white px-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-[#915EFF] disabled:opacity-50'
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isTyping || !inputValue.trim()}
                  className='bg-gradient-to-r from-[#915EFF] to-[#7c3aed] text-white p-3 rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  <IoSend size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with AI Logo - Only shows when chat is closed */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='bg-gradient-to-r from-[#915EFF] to-[#7c3aed] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:shadow-[#915EFF]/50 transition-all relative'
        >
          <div className='w-10 h-10 rounded-full bg-white flex items-center justify-center'>
            <span className='text-[#915EFF] font-black text-lg'>AI</span>
          </div>
          <span className='absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse'></span>
        </motion.button>
      )}
    </div>
  );
};

export default ChatbotWidget;
