import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

import usuariosRoutes from "./routes/usuarioRoutes";
import atencionRoutes from "./routes/atencionRoutes";
import locacionRoutes from "./routes/locacionRoutes";

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.ruotes();
  }
  config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json({ limit: "100mb" }));
    this.app.use(express.urlencoded({ limit: "100mb", extended: true }));
  }
  ruotes(): void {
    this.app.use("/", usuariosRoutes);
    this.app.use("/", atencionRoutes);
    this.app.use("/", locacionRoutes);
  }
  star(): void {
    this.app.listen(this.app.get("port"), "0.0.0.0", () => {
      console.log("server listening on port", this.app.get("port"));
    });
  }
}

const server = new Server();
server.star();
