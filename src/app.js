import express from 'express';
import { blogTeam } from './services/team.js';

export const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the Express App!</h1>
        <p>Endpoints:</p>
        <ul>
            <li><a href="/api/blog/generate">/api/blog/generate</a> - Generate a blog post - POST</li>
        </ul>
    `);
});

// Agentic route
app.post('/api/blog/generate', async (req, res) => {
    const { topic } = req.body;

    try {
        const output = await blogTeam.start({ topic });
        if (output.status === 'FINISHED') {
            const { costDetails, llmUsageStats, duration } = output.stats;

            res.send({
                "status_code": 200,
                "message": 'Your post generated successfully!',
                "data": {
                    "blog": output.result,
                    "stats": {
                        "duration": duration,
                        "tokens": {
                            "total_token_count": llmUsageStats.inputTokens + llmUsageStats.outputTokens,
                            "input_token_count": llmUsageStats.inputTokens,
                            "output_token_count": llmUsageStats.outputTokens,
                        },
                        "total_cost": costDetails.totalCost.toFixed(4)
                    }
                }
            });
        } else if (output.status === 'BLOCKED') {
            console.log('Workflow is blocked, unable to complete');
            res.send({
                "status_code": 400,
                "message": 'OOps, Workflow is blocked, unable to complete the post generation process!',
                "data": {}
            });
        }
    } catch (error) {
        console.error('Error generating blog post:', error);
        res.send({
            "status_code": 500,
            "message": 'Internal Server Error',
            "data": {}
        });
    }

});