"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController_1 = __importDefault(require("../controllers/usuarioController"));
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/api/usuario/listar', usuarioController_1.default.listarUsuarios);
        this.router.post('/api/usuario/crear', usuarioController_1.default.CrearUsuario);
        this.router.get('/api/usuario/:id_usuario', usuarioController_1.default.ObtenerUsuario);
        this.router.post('/api/usuario/login', usuarioController_1.default.ValidarLogin);
    }
}
const usuariosRoutes = new UsuariosRoutes;
exports.default = usuariosRoutes.router;
