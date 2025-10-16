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
                email: 'ezennagreat@gmail.com',
                name: 'Great Ezenna',
                stack: 'Node.js/Express',
            },
            timestamp: new Date().toISOString(),
            fact: catFact,
        });
    } catch (err) {
        logError(err, 'CAT API SERVICE');
        res.status(500).json({
            detail: 'Cat API service unavailable',
        });
    }
});

export { meRouter };
