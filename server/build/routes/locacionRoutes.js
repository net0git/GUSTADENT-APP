"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const locacionController_1 = __importDefault(require("../controllers/locacionController"));
class LocacionRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/api/locacion/listar', locacionController_1.default.listarLocaciones);
        this.router.post('/api/locacion/crear', locacionController_1.default.crearLocacion);
        this.router.delete('/api/locacion/eliminar/:id_locacion', locacionController_1.default.eliminarLocacion);
    }
}
const locacionRouter = new LocacionRouter;
exports.default = locacionRouter.router;
