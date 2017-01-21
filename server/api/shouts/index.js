import { Router } from 'express';

const prices = new Router();
const get = require('./get');

prices.get('/', get);

module.exports = prices;
