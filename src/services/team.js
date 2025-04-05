import { configDotenv } from "dotenv";
import { Team } from "kaibanjs";
import { researchAgent, validatorAgent, writerAgent } from "./agents.js";
import { researchTask, validationTask, writingTask } from "./tasks.js";

configDotenv({
    path: '.env.local'
});

export const blogTeam = new Team({
    name: 'AI News Blogging Team',
    agents: [researchAgent, writerAgent, validatorAgent],
    tasks: [researchTask, writingTask, validationTask],
    env: { GOOGLE_API_KEY: process.env.GEMINI_API_KEY }
});
