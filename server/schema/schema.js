const graphql = require("graphql");

const { GraphQlObjectType, GraphQlString, GraphQLSchema } = graphql;

const BookType = new GraphQlObjectType({
    name: "Book",
    fields:() => ({
        id: {type: GraphQlString},
        name: {type: GraphQlString},
        genre: {type: GraphQlString}
    }) 
});

const RootQuery = new GraphQlObjectType({
    name: "RootQueryType",
    fields:{
        book:{
            type: BookType,
            args: {id: {type: GraphQlString}},
            resolve(parent, args){

            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});