const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const schema = require("./schema/schema");

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema
}));

app.listen(8080,()=> {
    console.log("listening port...");
});
