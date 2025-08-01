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
Object.defineProperty(exports, "__esModule", { value: true });
const encryptor_1 = require("../encrytor/encryptor");
const database_1 = require("../database/database");
class UsuarioController {
    CrearUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password, nombre, telefono, ap_paterno, ap_materno, dni, } = req.body;
                const passwordcifrado = yield (0, encryptor_1.encriptar)(password);
                const consulta = `
                    INSERT INTO public.usuarios(
                        username, password, nombre, telefono, ap_paterno, ap_materno, dni)
                        VALUES ($1, $2, $3, $4, $5, $6, $7);
                `;
                const valores = [
                    username,
                    passwordcifrado,
                    nombre,
                    telefono,
                    ap_paterno,
                    ap_materno,
                    dni,
                ];
                database_1.pool.query(consulta, valores, (error) => {
                    if (error) {
                        console.error(`Error al crear usuario ${username}:`, error);
                    }
                    else {
                        console.log(`usuario ${username} creado correctamente`);
                        res.json({ text: `usuario ${username} se ha creado correctamente` });
                    }
                });
            }
            catch (error) {
                console.error("Error fatal al crear usuario:", error);
                res.status(500).json({ error: "Error interno del servidor" });
            }
        });
    }
    listarUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const consulta = `SELECT id_usuario,username,nombre,telefono,ap_paterno,ap_materno,dni,estado FROM usuarios`;
                const usuarios = yield database_1.pool.query(consulta);
                res.json(usuarios["rows"]);
            }
            catch (error) {
                console.error("Error fatal al obtener detalle de usuarios:", error);
                res.status(500).json({ error: "Error interno del servidor" });
            }
        });
    }
    ObtenerUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_usuario } = req.params;
                const consulta = "select * from t_usuario where id_usuario = $1";
                const usuario = yield database_1.pool.query(consulta, [id_usuario]);
                if (usuario && usuario["rows"].length > 0) {
                    res.json(usuario["rows"][0]);
                }
                else {
                    res.status(404).json({ text: "El usuario no existe" });
                }
            }
            catch (error) {
                console.error("Error fatal al obtener usuario:", error);
                res.status(500).json({ error: "Error interno del servidor" });
            }
        });
    }
    ValidarLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Validación de los datos de entrada
                const { username, password } = req.body;
                if (!username || !password) {
                    res
                        .status(400)
                        .json({ error: "Debe proporcionar nombre de usuario y contraseña." });
                    return; // Asegúrate de retornar después de cada res.status()
                }
                // Verificar si el usuario existe
                const usuarioQuery = "SELECT * FROM usuarios WHERE username = $1";
                const usuarioResult = yield database_1.pool.query(usuarioQuery, [username]);
                if (usuarioResult.rows.length !== 1) {
                    res.status(404).json({ error: "Usuario no encontrado." });
                    return;
                }
                const usuarioRest = usuarioResult.rows[0];
                // Verificar estado del usuario
                if (!usuarioRest.estado) {
                    res.status(403).json({ error: "El usuario no está activo." });
                    return;
                }
                // Comparar contraseñas
                const esPasswordCorrecto = yield (0, encryptor_1.comparar)(password, usuarioRest.password);
                if (!esPasswordCorrecto) {
                    res.status(401).json({ error: "Contraseña incorrecta." });
                    return; // Agrega el return aquí para evitar continuar con el código
                }
                // Si todo está correcto, responder con datos del usuario
                res.json({
                    success: true,
                    id_usuario: usuarioRest.id_usuario,
                    username: usuarioRest.username,
                    nombre: usuarioRest.nombre,
                    ap_paterno: usuarioRest.ap_paterno,
                    ap_materno: usuarioRest.ap_materno,
                    dni: usuarioRest.dni,
                    estado: usuarioRest.estado,
                });
            }
            catch (error) {
                console.error("Error fatal al validar el login:", error);
                res.status(500).json({ error: "Error interno del servidor." });
            }
        });
    }
}
const usuarioController = new UsuarioController();
exports.default = usuarioController;
