import { Router } from 'express';

const meRouter = Router();

meRouter.get('/', (req, res) => {
    res.json({ message: 'working fine' });
});

export { meRouter };
