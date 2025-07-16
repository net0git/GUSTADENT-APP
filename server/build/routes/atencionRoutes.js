"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const atencionController_1 = __importDefault(require("../controllers/atencionController"));
class AtencionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/api/atencion/crear', atencionController_1.default.crearAtencion);
        this.router.get('/api/atencion/consultar/fecha/:fecha', atencionController_1.default.listarAtencionesByFecha);
    }
}
const atencionRoutes = new AtencionRoutes;
exports.default = atencionRoutes.router;
