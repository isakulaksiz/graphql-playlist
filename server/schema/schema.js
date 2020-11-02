const graphql = require("graphql");
const_=require("lodash");   

const { GraphQlObjectType, GraphQlString, GraphQLSchema } = graphql;

var books=[
    {name: "The Little Prince", genre: "Fantasy", id:'1'},
    {name: "The Final Empire", genre: "Fantasy", id: "2"},
    {name: "The Long Earth", genre: "Sci-Fi", id: "3"},
];

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
                return _find(books, {id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});