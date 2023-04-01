const db = require('../config/connection');
const { Article } = require('../models');

const articleData = require('./articleData.json');

db.once('open', async () => {
    await Article.deleteMany({});

    const articles = await Article.insertMany(articleData);

    console.log('Articles seeded!');
    process.exit(0);
});