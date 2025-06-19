const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  nativeLanguage: {
    type: String,
    required: true
  },
  learningLanguages: [{
    language: String,
    proficiencyLevel: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'beginner'
    },
    startedAt: {
      type: Date,
      default: Date.now
    }
  }],
  profile: {
    name: String,
    avatar: String,
    bio: String
  },
  preferences: {
    theme: {
      type: String,
      default: 'light'
    },
    dailyGoal: {
      type: Number,
      default: 15 // minutes
    },
    notifications: {
      type: Boolean,
      default: true
    }
  },
  statistics: {
    totalPracticeTime: {
      type: Number,
      default: 0
    },
    sessionsCompleted: {
      type: Number,
      default: 0
    },
    streak: {
      type: Number,
      default: 0
    },
    lastActiveDate: Date
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
