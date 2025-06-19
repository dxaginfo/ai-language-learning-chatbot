# Chat Interface UI Mockup

## Overview

The chat interface is the core interaction point for users practicing language conversation with the AI. It should be intuitive, engaging, and provide clear feedback on language usage.

## UI Components

### Language Selection Panel
```
+-----------------------------------------------+
|                                               |
|  Select a language to practice                |
|                                               |
|  [ Spanish ]  [ French ]  [ German ]          |
|  [ Italian ]  [ Japanese ] [ Portuguese ]     |
|  [ Russian ]  [ Mandarin ] [ Korean ]         |
|                                               |
|  Select proficiency level:                    |
|                                               |
|  (O) Beginner  ( ) Intermediate ( ) Advanced  |
|                                               |
|          [ Start Conversation ]               |
|                                               |
+-----------------------------------------------+
```

### Main Chat Window
```
+-----------------------------------------------+
| Language Practice: Spanish (Beginner)       X |
+-----------------------------------------------+
|                                               |
| AI Tutor - 10:30 AM                           |
| +-------------------------------------------+ |
| | ¡Hola! ¿Cómo estás hoy?                   | |
| +-------------------------------------------+ |
|                                               |
| You - 10:31 AM                                |
| +-------------------------------------------+ |
| | Estoy bien, gracias. ¿Y tú?               | |
| +-------------------------------------------+ |
|                                               |
| AI Tutor - 10:31 AM                           |
| +-------------------------------------------+ |
| | ¡Muy bien! ¿Qué te gustaría hacer hoy?    | |
| |                                           | |
| | Feedback:                                 | |
| | ✓ Good grammar                            | |
| | ✓ Appropriate response                    | |
| +-------------------------------------------+ |
|                                               |
|                                               |
|                                               |
+-----------------------------------------------+
| +-------------------+  +-------------------+  |
| | Type a message... |  |       Send        |  |
| +-------------------+  +-------------------+  |
+-----------------------------------------------+
```

### Conversation Topics Panel
```
+-----------------------------------------------+
|                                               |
|  Suggested Topics                             |
|                                               |
|  • Introducing yourself                        |
|  • Ordering in a restaurant                   |
|  • Asking for directions                      |
|  • Shopping for clothes                       |
|  • Talking about hobbies                      |
|                                               |
+-----------------------------------------------+
```

### Feedback Sidebar
```
+-----------------------------------------------+
|                                               |
|  Session Feedback                             |
|                                               |
|  Grammar: ●●●●○ (4/5)                        |
|  Vocabulary: ●●●○○ (3/5)                     |
|  Fluency: ●●●○○ (3/5)                        |
|  Comprehension: ●●●●○ (4/5)                  |
|                                               |
|  Vocabulary learned:                          |
|  • gracias - thank you                        |
|  • bien - well/good                           |
|  • hoy - today                                |
|                                               |
|  Suggestions:                                 |
|  • Practice past tense verbs                  |
|  • Work on question formation                 |
|                                               |
+-----------------------------------------------+
```

## User Flow

1. User selects language and proficiency level
2. User clicks "Start Conversation" button
3. AI initiates conversation with greeting
4. User responds to AI
5. AI responds with:
   - Contextual continuation of conversation
   - Feedback on user's language use
   - Corrections if needed
6. Conversation continues with natural back-and-forth
7. User can switch topics using suggestion panel
8. At end of session, user receives comprehensive feedback

## Visual Design Guidelines

- **Color Scheme**:
  - Primary: #3B82F6 (Blue 600)
  - Secondary: #1E3A8A (Indigo 900)
  - Accent: #DBEAFE (Blue 100)
  - Text: #1F2937 (Gray 800)
  - Light Text: #F9FAFB (Gray 50)

- **Typography**:
  - Headings: Inter, sans-serif
  - Body: Inter, sans-serif
  - Chat Messages: Inter, sans-serif

- **Visual Hierarchy**:
  - Bot messages left-aligned with light background
  - User messages right-aligned with blue background
  - Feedback sections visually distinct but not distracting
  - Important actions (like "Send") highlighted with primary color
  
## Responsive Design Considerations

- On mobile devices, feedback sidebar becomes collapsible
- Topic suggestions may move to a dropdown menu
- Input field and send button stay fixed at bottom of screen
- Full width messages on small screens

## Accessibility Features

- High contrast between text and background
- Screen reader friendly element labeling
- Keyboard navigation support
- Ability to increase text size
- Alternative text for any icons or visual elements