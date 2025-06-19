const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  sender: {
    type: String,
    enum: ['user', 'bot'],
    required: true
  },
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  feedback: {
    corrections: [{
      original: String,
      corrected: String,
      explanation: String,
      type: {
        type: String,
        enum: ['grammar', 'vocabulary', 'spelling', 'syntax', 'other']
      }
    }],
    fluencyScore: {
      type: Number,
      min: 0,
      max: 100
    },
    positivePoints: [String]
  }
});

const ConversationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  language: {
    type: String,
    required: true
  },
  topic: String,
  messages: [MessageSchema],
  proficiencyLevel: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  duration: Number, // in seconds
  learningGoals: [String],
  feedback: {
    overallScore: Number,
    strengths: [String],
    areasToImprove: [String],
    vocabularyIntroduced: [String]
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Conversation', ConversationSchema);
