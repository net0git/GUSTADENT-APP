"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const atencionRoutes_1 = __importDefault(require("./routes/atencionRoutes"));
const locacionRoutes_1 = __importDefault(require("./routes/locacionRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.ruotes();
    }
    config() {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json({ limit: "100mb" }));
        this.app.use(express_1.default.urlencoded({ limit: "100mb", extended: true }));
    }
    ruotes() {
        this.app.use("/", usuarioRoutes_1.default);
        this.app.use("/", atencionRoutes_1.default);
        this.app.use("/", locacionRoutes_1.default);
    }
    star() {
        this.app.listen(this.app.get("port"), "0.0.0.0", () => {
            console.log("server listening on port", this.app.get("port"));
        });
    }
}
const server = new Server();
server.star();
