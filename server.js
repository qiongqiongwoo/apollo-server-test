import express from 'express';
import graphqlHTTP from 'express-graphql';
import bodyParser from 'body-parser';
import cors from 'cors';
import schema from './data/schema';
// 端口
const GRAPHQL_PORT = 3002;
// server
const graphQLServer = express();

graphQLServer.use('*', cors({ origin: 'http://localhost:3000' }));
graphQLServer.use('/graphql', bodyParser.json(), graphqlHTTP({ schema, graphiql: true }));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));

