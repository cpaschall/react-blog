const { Article } = require('../models');

const resolvers = {
    Query: {
        article: async () => {
            return Article.find({})
        }
    },

    Mutation: {
        createArticle: async (parent, args) => {
            const article = await Article.create(args);
            return article;
        }
    }
};

module.exports = resolvers;