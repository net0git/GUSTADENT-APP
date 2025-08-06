"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pacienteController_1 = __importDefault(require("../controllers/pacienteController"));
class PacientesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/api/paciente/listar', pacienteController_1.default.listarPacientes);
        this.router.post('/api/paciente/crear', pacienteController_1.default.CrearPaciente);
    }
}
const pacientesRoutes = new PacientesRoutes;
exports.default = pacientesRoutes.router;
