const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://shaun:test123@qql-ninja.43vf0.mongodb.net/shaun?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true});
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
