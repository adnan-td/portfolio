"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const dotenv = __importStar(require("dotenv"));
const neo4j_driver_1 = __importDefault(require("neo4j-driver"));
const graphql_1 = require("@neo4j/graphql");
const schema_1 = require("./schema");
const mutation_1 = require("./resolvers/mutation/mutation");
const graphql_plugin_auth_1 = require("@neo4j/graphql-plugin-auth");
dotenv.config();
const driver = neo4j_driver_1.default.driver(process.env.NEO4J_URI, neo4j_driver_1.default.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD));
const neoSchema = new graphql_1.Neo4jGraphQL({
    typeDefs: schema_1.typeDefs,
    driver,
    resolvers: {
        Mutation: {
            signIn: mutation_1.signInResolver,
        },
    },
    plugins: {
        auth: new graphql_plugin_auth_1.Neo4jGraphQLAuthJWTPlugin({
            secret: process.env.NEO4J_SECRET,
        }),
    },
});
exports.schema = neoSchema.getSchema();
