import express from 'express';
import { meRouter } from './routes/me.js';

const app = express();

app.use(express.json());
app.use('/me', meRouter);

export { app };
