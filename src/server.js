import dotenv from 'dotenv';
import { app } from './app.js';
import logError from './utils/logError.js';

dotenv.config({
    path: '.env',
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) {
        logError(err, 'APP');
    } else {
        console.log(`Server started at ${PORT}`);
    }
});
