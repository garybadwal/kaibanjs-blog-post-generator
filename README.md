# BlogGen - AI-Powered Blog Generator

BlogGen is an AI-powered blog generator that uses agent-based workflows to create engaging blog posts on trending topics. It leverages the `kaibanjs` library to define agents and tasks, and integrates with external APIs for research and content generation.

## Features

- **Agent-Based Workflow**: Utilizes agents for research, writing, and validation tasks.
- **Dynamic Blog Generation**: Generates blog posts based on user-provided topics.
- **API Integration**: Integrates with external APIs like Tavily Search and Google Gemini for enhanced functionality.
- **Express.js Backend**: Provides a REST API for generating blog posts.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/bloggen.git
   cd bloggen
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory and add your API keys:
   ```
   GEMINI_API_KEY=your-google-gemini-api-key
   SERP_API_KEY=your-serpapi-key
   TAVILY_API_KEY=your-tavily-api-key
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```
3. Use the /api/blog/generate endpoint to generate a blog post:
    - Method: POST
    - Body:
    ```JSON
    {
        "topic": "Your topic here"
    }
    ```
4. Example response:
   ```JSON
   {
    "status_code": 200,
    "message": "Your post generated successfully!",
    "data": {
        "blog": "Generated blog content...",
        "stats": {
        "duration": "5s",
        "tokens": {
            "total_token_count": 1000,
            "input_token_count": 500,
            "output_token_count": 500
        },
        "total_cost": "0.1234"
        }
    }
    }
   ```

## Project Structure
```
blogGen/
├── src/
│   ├── app.js    # Express app setup
│   ├── index.js  # Entry point
│   ├── services/
│   │   ├── agents.js # Agent definitions
│   │   ├── tasks.js # Task definitions
│   │   ├── team.js  # Team setup
│   │   ├── tools.js # Tool integrations
├── .env.local  # Environment variables
├── .gitignore  # Ignored files
├── package.json  # Project metadata and dependencies
```

## Dependencies
 - Express - Web framework for Node.js
 - dotenv - Environment variable management
 - kaibanjs - Agent-based workflow library
 - LangChain Community Tools - Tavily Search integration
 - Nodemon - Development utility for auto-restarting the server

## License
This project is licensed under the MIT License.