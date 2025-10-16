import axios from 'axios';

const catFactUrl = 'https://catfact.ninja/fact';

async function getCatFact() {
    try {
        const response = await axios.get(catFactUrl);
        const catFact = response.data.fact;
        if (!catFact) {
            return;
        } else {
            return catFact;
        }
    } catch (err) {
        throw err
    }
}

export { getCatFact }