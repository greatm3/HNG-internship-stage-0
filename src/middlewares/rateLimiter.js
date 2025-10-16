export default function rateLimiter(ipRequestsMap) {
    const maxRequestsPer10Mins = 50;
    const windowMs = 10 * 60 * 1000; // 10 minites window


    return (req, res, next) => {
        const ipAddress = req.ip;

        const ipV4Address = ipAddress.startsWith('::ffff:')
            ? ipAddress.split(':').pop()
            : ipAddress;

        if (ipRequestsMap.has(ipV4Address)) {
            let value = ipRequestsMap.get(ipV4Address).count;
            let time = ipRequestsMap.get(ipV4Address).firstRequestTime;
            let timeDifference = new Date() - new Date(time);

            if (value >= maxRequestsPer10Mins) {
                // reset count every 10mins
                if (timeDifference > windowMs) {
                    ipRequestsMap.set(ipV4Address, {
                        count: 1,
                        firstRequestTime: new Date().toISOString(),
                    });
                    return next()
                } else {
                    return res.status(429).json({
                        error: 'Too many requests, please try again.',
                    });
                }
            } else {
                ipRequestsMap.set(ipV4Address, {
                    count: (value += 1),
                    firstRequestTime: time,
                });
                return next()
            } 
        } else {
            ipRequestsMap.set(ipV4Address, {
                count: 1,
                firstRequestTime: new Date().toISOString(),
            });
            return next()
        } 
    };
}
