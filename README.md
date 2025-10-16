# HNG Backend — Stage 0 Task  
### Dynamic Profile Endpoint with Cat Fact API 

This is my Stage 0 task for the **HNG BACKEND**.
The project is a simple RESTful API that returns my profile information along with a *random cat fact* fetched dynamically from an external API

## Endpoint
**GET** `/me`

### Example Response:
```json
{
  "status": "success",
  "user": {
    "email": "youremail@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-15T12:34:56.789Z",
  "fact": "Cats sleep for 70% of their lives."
}
```

### Features
- Fetches a random cat fact from https://catfact.ninja/fact
- Returns current UTC timestamp in ISO 8601 format
- Include custom rate limiter middleware(limits 50 requests per 10 minutes per IP)
- Handles external API errors gracefully
- Returns 404 JSON message for invalid routes
- Well-structured and beginner-friendly Express project

### Project Structure
```bash
.
├── src
│   ├── routes
│   │   └── me.js          # /me endpoint route
│   ├── middleware
│   │   └── rateLimiter.js # custom rate limiter
│   ├── services
│   │   └── catService.js  # fetch cat facts
│   ├── app.js             # express app setup
│   └── server.js          # server start file
├── .env.example           # sample environment variables
├── package.json
└── README.md
```

### Tech Stack
- Runtime: Node.js
- Framework: Express.js
- HTTP Client: axios
- Langusage: Javascript
- Deployment: Railway

## Installation and setup
- clone the repo
```sh
git clone https://github.com/greatm3/HNG-internship-stage-0.git
cd HNG-internship-stage-0
```

- install dependencies
```sh
npm install
```

- Environmental variables, create a `.env` file and configure (see `.env.example`)

- run the server
```sh
npm run dev # nodemon src/server.js

or

npm run start # node src/server.js
```

- Access the API
```bash
http://localhost:9090/me
```

### What i learnt
This task taught me how to:
- Build and structure a clean Express backend
- Integrate external APIs
- Implement custom rate limiting
- Handle API errors gracefully
- Deploy on Railway