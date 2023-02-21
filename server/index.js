const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas/index");
const cors = require("cors");
const mongoose = require("mongoose")
const route = require('./routes/route');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

require('dotenv').config({path:"./.env"})
mongoose.connect(process.env.DATABASEURI, { useNewUrlParser: true, }).then(() => {
    console.log("Aman you have connected with your mongoDB")
}).catch((err) => console.log("There is some problem in mongoose connection", { error: err }))

app.use("/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use('/', route);

app.listen(6969, () => {
  console.log("Server running");
});