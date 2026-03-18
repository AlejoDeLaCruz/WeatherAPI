import express from 'express';
import dotenv from 'dotenv';
import router from './index.ts';

const app = express();

dotenv.config();

app.use(express.json());

app.use('/', router);

export default app;
