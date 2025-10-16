import express from 'express';
import cors from 'cors';
import { meRouter } from './routes/me.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/me', meRouter);

// 
app.use((req, res) => {
    res.status(404).json({ error: 'go to /me endpoint' });
});

export { app };
