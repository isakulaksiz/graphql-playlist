const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://shaun:test123@gql-ninja.3j08m.mongodb.net/gql-ninja?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once("open",() => {
    console.log("connected to database");
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(8080,()=> {
    console.log("listening port...");
});
