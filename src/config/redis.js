const Redis = require('ioredis');
const {promisify} = require('util');
const redis = new Redis({
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    username: "default", // needs Redis >= 6
    password: process.env.REDIS_PASSWORD,
    db: 0,
});

const getAsync = promisify(redis.get).bind(redis);
const setAsync = promisify(redis.set).bind(redis);

module.exports = {
    getAsync,
    setAsync,
    redis
};