import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import { configDotenv } from "dotenv";

configDotenv({
    path: '.env.local'
});

export const searchTool = new TavilySearchResults({
    maxResults: 5,
    apiKey: process.env.TAVILY_API_KEY
});