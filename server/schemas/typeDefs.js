const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Article {
        _id: ID!
        title: String!
        author: String!
        date: String
        content: String
    }

    type Query {
        article: [Article]
    }

    type Mutation {
        createArticle(title: String!, author: String!, date: String, content: String!): Article
    }
`;

module.exports = typeDefs;