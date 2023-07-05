"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./src/app"));
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const neo4j_1 = require("./src/neo4j");
const cron_1 = __importDefault(require("./src/cron"));
const PORT = parseInt(process.env.PORT, 10) || 3000;
const server = http_1.default.createServer(app_1.default);
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const apolloServer = new server_1.ApolloServer({
            schema: yield neo4j_1.schema,
            introspection: true,
            plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer: server })],
        });
        yield apolloServer.start();
        app_1.default.use("/graphql", (0, express4_1.expressMiddleware)(apolloServer, {
            context: ({ req, res }) => __awaiter(this, void 0, void 0, function* () {
                return { req, res, user: null };
            }),
        }));
        server.listen(PORT, () => {
            console.log(`Listening on port ${PORT}...`);
            console.log(`Site - http://localhost:${PORT}/graphql`);
        });
    });
}
(0, cron_1.default)();
startServer();
