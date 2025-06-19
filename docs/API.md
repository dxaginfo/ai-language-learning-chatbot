# AI Language Learning Chatbot API Documentation

## Base URL

```
http://localhost:5000/api
```

For production:

```
https://api.linguachat.ai/api
```

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Endpoints

### User Management

#### Register a new user

```
POST /users/register
```

Request Body:

```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword",
  "nativeLanguage": "English"
}
```

Response:

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60d21b4667d0d8992e610c85",
    "username": "johndoe",
    "email": "john@example.com",
    "nativeLanguage": "English"
  }
}
```

#### Login

```
POST /users/login
```

Request Body:

```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

Response:

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60d21b4667d0d8992e610c85",
    "username": "johndoe",
    "email": "john@example.com"
  }
}
```

#### Get current user profile

```
GET /users/me
```

Response:

```json
{
  "success": true,
  "data": {
    "id": "60d21b4667d0d8992e610c85",
    "username": "johndoe",
    "email": "john@example.com",
    "nativeLanguage": "English",
    "learningLanguages": [
      {
        "language": "Spanish",
        "proficiencyLevel": "intermediate",
        "startedAt": "2023-01-15T08:30:00.000Z"
      }
    ],
    "profile": {
      "name": "John Doe",
      "avatar": "https://example.com/avatars/johndoe.jpg"
    },
    "statistics": {
      "totalPracticeTime": 3600,
      "sessionsCompleted": 12,
      "streak": 5
    }
  }
}
```

### Conversation Management

#### Start a new conversation

```
POST /conversations
```

Request Body:

```json
{
  "language": "Spanish",
  "proficiencyLevel": "intermediate",
  "topic": "travel",
  "learningGoals": ["vocabulary", "speaking"]
}
```

Response:

```json
{
  "success": true,
  "data": {
    "id": "60d21c1c67d0d8992e610c86",
    "language": "Spanish",
    "proficiencyLevel": "intermediate",
    "topic": "travel",
    "learningGoals": ["vocabulary", "speaking"],
    "messages": [
      {
        "sender": "bot",
        "content": "¡Hola! Vamos a hablar sobre viajes. ¿Has viajado recientemente?",
        "timestamp": "2023-06-22T14:30:00.000Z"
      }
    ],
    "created": "2023-06-22T14:30:00.000Z"
  }
}
```

#### Send a message in conversation

```
POST /conversations/:id/messages
```

Request Body:

```json
{
  "content": "Sí, fui a la playa el mes pasado."
}
```

Response:

```json
{
  "success": true,
  "data": {
    "message": {
      "sender": "user",
      "content": "Sí, fui a la playa el mes pasado.",
      "timestamp": "2023-06-22T14:31:00.000Z"
    },
    "response": {
      "sender": "bot",
      "content": "¡Qué bueno! ¿A qué playa fuiste? ¿Cómo estuvo el clima?",
      "timestamp": "2023-06-22T14:31:01.000Z",
      "feedback": {
        "corrections": [],
        "fluencyScore": 85,
        "positivePoints": ["Good use of past tense"]
      }
    }
  }
}
```

#### Get conversation history

```
GET /conversations/:id
```

Response:

```json
{
  "success": true,
  "data": {
    "id": "60d21c1c67d0d8992e610c86",
    "language": "Spanish",
    "proficiencyLevel": "intermediate",
    "topic": "travel",
    "messages": [
      {
        "sender": "bot",
        "content": "¡Hola! Vamos a hablar sobre viajes. ¿Has viajado recientemente?",
        "timestamp": "2023-06-22T14:30:00.000Z"
      },
      {
        "sender": "user",
        "content": "Sí, fui a la playa el mes pasado.",
        "timestamp": "2023-06-22T14:31:00.000Z"
      },
      {
        "sender": "bot",
        "content": "¡Qué bueno! ¿A qué playa fuiste? ¿Cómo estuvo el clima?",
        "timestamp": "2023-06-22T14:31:01.000Z",
        "feedback": {
          "corrections": [],
          "fluencyScore": 85,
          "positivePoints": ["Good use of past tense"]
        }
      }
    ],
    "duration": 120,
    "created": "2023-06-22T14:30:00.000Z"
  }
}
```

#### List user conversations

```
GET /conversations
```

Response:

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": "60d21c1c67d0d8992e610c86",
      "language": "Spanish",
      "topic": "travel",
      "created": "2023-06-22T14:30:00.000Z",
      "duration": 120
    },
    {
      "id": "60d33d4c67d0d8992e610c87",
      "language": "Spanish",
      "topic": "food",
      "created": "2023-06-21T10:15:00.000Z",
      "duration": 180
    }
  ]
}
```

### Language Resources

#### Get available languages

```
GET /languages
```

Response:

```json
{
  "success": true,
  "data": [
    {
      "code": "es",
      "name": "Spanish",
      "levels": ["beginner", "intermediate", "advanced"]
    },
    {
      "code": "fr",
      "name": "French",
      "levels": ["beginner", "intermediate", "advanced"]
    },
    {
      "code": "de",
      "name": "German",
      "levels": ["beginner", "intermediate", "advanced"]
    }
  ]
}
```

#### Get conversation topics

```
GET /topics?language=es&level=intermediate
```

Response:

```json
{
  "success": true,
  "data": [
    {
      "id": "travel",
      "name": "Travel",
      "description": "Discuss travel experiences, destinations, and preferences"
    },
    {
      "id": "food",
      "name": "Food and Cooking",
      "description": "Talk about favorite foods, recipes, and dining experiences"
    },
    {
      "id": "hobbies",
      "name": "Hobbies and Interests",
      "description": "Discuss leisure activities and personal interests"
    }
  ]
}
```

## Error Responses

All endpoints return errors in the following format:

```json
{
  "success": false,
  "error": "Error message describing what went wrong"
}
```

Common HTTP status codes:

- `400 Bad Request`: Invalid input data
- `401 Unauthorized`: Missing or invalid authentication
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server-side error

## Rate Limiting

API requests are limited to 100 requests per IP address per hour. Exceeding this limit will result in a `429 Too Many Requests` response.
