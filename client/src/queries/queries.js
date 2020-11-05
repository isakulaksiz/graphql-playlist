import {gql} from "apollo-boost";

const getBooksQuery = gql`
  {
    books{
      name
      id
    }
  }
`
const getAuthorsQuery = gql`
    {
        author {
            name
            id
        }
    }
`
export {getAuthorsQuery, getBooksQuery};