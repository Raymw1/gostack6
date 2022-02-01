const kue = require("kue");
const redisConfig = require("../../config/redis");
const jobs = require("../jobs");

const Queue = kue.createQueue({ redis: redisConfig });

Queue.process(jobs.OrderMail.key, jobs.OrderMail.handle);

module.exports = Queue;
