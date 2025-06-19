import React, { useState } from 'react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      content: 'Hello! I\'m your language practice partner. What language would you like to practice today?',
      timestamp: new Date().toISOString(),
    },
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [proficiencyLevel, setProficiencyLevel] = useState('beginner');
  const [showLanguageSelector, setShowLanguageSelector] = useState(true);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      sender: 'user',
      content: inputValue,
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, newUserMessage]);
    setInputValue('');

    // Simulate bot response (would be AI in production)
    setTimeout(() => {
      let responseContent = '';
      
      if (showLanguageSelector) {
        responseContent = `Great! Let's practice ${inputValue}. How would you rate your proficiency level in ${inputValue}?`;
        setSelectedLanguage(inputValue);
        setShowLanguageSelector(false);
      } else {
        // Sample responses - in a real app, this would come from the AI service
        const responses = [
          "That's interesting! Could you tell me more about that?",
          "I understand. Let's explore that topic further. What aspects are you most curious about?",
          "That's a good point. Have you considered looking at it from another perspective?",
          "Nice sentence structure! You're doing well with your grammar.",
          "I noticed a small error. Instead of saying it that way, try this...",
        ];
        
        responseContent = responses[Math.floor(Math.random() * responses.length)];
      }
      
      const newBotMessage = {
        id: messages.length + 2,
        sender: 'bot',
        content: responseContent,
        timestamp: new Date().toISOString(),
      };
      
      setMessages(prev => [...prev, newBotMessage]);
    }, 1000);
  };

  const handleStartPractice = () => {
    const newBotMessage = {
      id: messages.length + 1,
      sender: 'bot',
      content: `Perfect! Let's start practicing ${selectedLanguage} at a ${proficiencyLevel} level. Tell me, what did you do yesterday?`,
      timestamp: new Date().toISOString(),
    };
    
    setMessages([...messages, newBotMessage]);
    setShowLanguageSelector(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Chat header */}
        <div className="bg-blue-600 text-white p-4">
          <h2 className="text-xl font-semibold">Language Practice Session</h2>
          {selectedLanguage && (
            <p className="text-sm text-blue-100">
              Practicing: {selectedLanguage} ({proficiencyLevel})
            </p>
          )}
        </div>

        {/* Language selector */}
        {showLanguageSelector && selectedLanguage && (
          <div className="p-4 bg-blue-50">
            <p className="mb-2">Select your proficiency level:</p>
            <div className="flex space-x-2 mb-4">
              {['beginner', 'intermediate', 'advanced'].map((level) => (
                <button
                  key={level}
                  className={`px-4 py-2 rounded ${proficiencyLevel === level ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300'}`}
                  onClick={() => setProficiencyLevel(level)}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
            <button
              className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={handleStartPractice}
            >
              Start Practice
            </button>
          </div>
        )}

        {/* Chat messages */}
        <div className="h-96 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs sm:max-w-sm md:max-w-md rounded-lg p-3 ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}
                >
                  <p>{message.content}</p>
                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat input */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
