import express from 'express';
import routes from './routes.ts';

const router = express.Router();

router.use('/api', routes);

export default router;