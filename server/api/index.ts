import app from "../src/app";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { schema } from "../src/neo4j";

interface Context {
  req: any;
  res: any;
  user?: any;
}

async function startServer() {
  const apolloServer = new ApolloServer<Context>({
    schema: await schema,
    introspection: true,
  });

  await apolloServer.start();

  app.use(
    "/graphql",
    expressMiddleware(apolloServer, {
      context: async ({ req, res }) => {
        return { req, res, user: null };
      },
    })
  );
}

startServer();

export default app;
