import { Router } from 'express';
import { getCatFact } from '../services/catFactService.js';
import logError from '../utils/logError.js';

const meRouter = Router();

meRouter.get('/', async (req, res) => {
    try {
        const catFact = await getCatFact();
        res.status(200).json({
            status: 'success',
            user: {
                email: process.env.USER_EMAIL || 'ezennagreat@gmail.com',
                name: process.env.USER_NAME || 'Great Ezenna',
                stack: process.env.USER_STACK || 'Node.js/Express',
            },
            timestamp: new Date().toISOString(),
            fact: catFact,
        });
    } catch (err) {
        logError(err, 'CAT API SERVICE');
        res.status(500).json({
            error: 'Cat API service unavailable',
        });
    }
});

export { meRouter };
