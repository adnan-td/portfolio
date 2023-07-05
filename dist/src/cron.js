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
const axios_1 = __importDefault(require("axios"));
const node_cron_1 = __importDefault(require("node-cron"));
function CronDeclare() {
    node_cron_1.default.schedule("0 10,22 * * *", () => __awaiter(this, void 0, void 0, function* () {
        console.log("Running a cron job");
        try {
            const res = yield axios_1.default.post("https://backend.adnansh.in/graphql", {
                query: `
          query{
            projects {
              id
              title
              tech
              image
              github
              url
            }
          }
        `,
            }, {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/113.0",
                    Accept: "*/*",
                },
            });
            // console.log("Success!");
        }
        catch (err) {
            console.log("Error occured!");
            // console.log(err);
        }
    }));
}
exports.default = CronDeclare;
