export default function logError(err, layer = 'App') {
    if (!err instanceof Error) return;
    console.log(`[${layer} Layer]: ${err.message}`);
}
