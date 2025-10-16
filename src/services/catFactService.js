import axios from 'axios'; 

const catFactUrl = 'https://catfact.ninja/fact';

const client = axios.create({ 
    timeout: 5000
})

async function getCatFact() {
    try {
        const response = await client.get(catFactUrl);
        const catFact = response.data.fact;
        if (!catFact) {
            return;
        } else {
            return catFact;
        }
    } catch (err) {
        throw err;
    }
}

export { getCatFact }