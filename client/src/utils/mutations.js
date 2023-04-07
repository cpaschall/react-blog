import { gql } from '@apollo/client';

export const CREATE_ARTICLE = gql`
    mutation createArticle($title: String!, $author: String!, $date: String, $content: String!) {
        createArticle(title: $title, author: $author, date: $date, content: $content) {
            _id
            title
            author
            date
            content
        }
    }
`;