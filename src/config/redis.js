const util = require("util");
const redis = require("redis");

console.log(process.env.REDIS_HOST);
console.log(process.env.REDIS_PORT);

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  });

client.on("connect", function () {
  console.log("Redis Connected!");
});

client.on("error", function (error) {
  console.error(error);
});

const setClient = util.promisify(client.set).bind(client);
const getClient = util.promisify(client.get).bind(client);
const existsClient = util.promisify(client.exists).bind(client);
const deleteKeyClient = util.promisify(client.del).bind(client);

const set = async (key, value, ttl) => {
  await setClient(key, JSON.stringify(value), "EX", ttl);
};

const get = async (key) => {
  const data = await getClient(key);

  return JSON.parse(data);
};

const deleteKey = async (key) => {
  await deleteKeyClient(key);
};

const exists = async (key) => {
  const isExists = await existsClient(key);

  return isExists === 1;
};

module.exports = {
  set,
  get,
  exists,
  deleteKey,
};

