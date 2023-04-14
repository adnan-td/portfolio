import http from "http";
import app from "./src/app";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { schema } from "./src/neo4j";

const PORT = parseInt(process.env.PORT, 10) || 3000;
const server = http.createServer(app);

interface Context {
  req: any;
  res: any;
  user?: any;
}

async function startServer() {
  const apolloServer = new ApolloServer<Context>({
    schema: await schema,
    introspection: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer: server })],
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

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
    console.log(`Site - http://localhost:${PORT}/graphql`);
  });
}

startServer();
