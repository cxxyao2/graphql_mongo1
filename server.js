const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const mongoose = require('mongoose');
const schema = require('./schema/graphql');

const app = express();
app.use(cors());

const dbConnection = 'mongodb://localhost:27017/graphqlTutorial';
mongoose
  .connect(dbConnection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.info(`Connected to ${dbConnection}...`));

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(5000, () => console.log('server running'));
