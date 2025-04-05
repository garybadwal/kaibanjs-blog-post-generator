import { Task } from "kaibanjs";
import { researchAgent, validatorAgent, writerAgent } from "./agents.js";

export const researchTask = new Task({
    title: 'Latest news research',
    description: 'Research the latest news on the topic: {topic}',
    expectedOutput: 'A summary of the latest news and key points on the given topic',
    agent: researchAgent
});

export const writingTask = new Task({
    title: 'Blog post writing',
    description: 'Write a blog post about {topic}',
    expectedOutput: 'An engaging blog post summarizing the latest news on the topic in Markdown format',
    agent: writerAgent
});

export const validationTask = new Task({
    title: 'Blog post validating',
    description: 'validate the blog post about {topic} written by content creator',
    expectedOutput: 'An engaging blog post with high audience engagement and SEO firendly that is ready to be published in Markdown format',
    agent: validatorAgent
});