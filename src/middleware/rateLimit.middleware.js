const Redis = require('ioredis');
const redis = new Redis({
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    username: "default", // needs Redis >= 6
    password: process.env.REDIS_PASSWORD,
    db: 0,
});

const rateLimiter =  ({secondsWindow, allowedHits})=> {

    return async function(req, res, next){

        const ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;

        const requests = await redis.incr(ip);

        let tll;
        if(requests === 1){
            await redis.expire(ip, secondsWindow);
            tll = secondsWindow;
        }else{
            ttl = await redis.ttl(ip);
        }

        if(requests > allowedHits){
            return res.status(503).json({
                message: 'Too many requests',
                callsInAMinute: requests,
                ttl
            });
        }else{
            req.requests = requests;
            req.tll = tll;
            next();
        }
    }

}

module.exports = rateLimiter;