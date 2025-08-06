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
const database_1 = require("../database/database");
class PacienteController {
    listarPacientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const consulta = `SELECT * FROM pacientes`;
                const usuarios = yield database_1.pool.query(consulta);
                res.json(usuarios["rows"]);
            }
            catch (error) {
                console.error("Error fatal al obtener detalle de usuarios:", error);
                res.status(500).json({ error: "Error interno del servidor" });
            }
        });
    }
    CrearPaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nombre, ap_paterno, ap_materno, dni, telefono } = req.body;
                const consulta = `
                   INSERT INTO public.pacientes(
                    nombre, ap_paterno, ap_materno, dni, telefono, created_at)
                    VALUES ($1, $2, $3, $4, $5, $6);
                `;
                const valores = [
                    nombre,
                    ap_paterno,
                    ap_materno,
                    dni,
                    telefono,
                    new Date(),
                ];
                database_1.pool.query(consulta, valores, (error) => {
                    if (error) {
                        console.error(`Error al crear paciente ${nombre}:`, error);
                    }
                    else {
                        console.log(`Paciente ${nombre} creado correctamente`);
                        res.json({ text: `Paciente ${nombre} se ha creado correctamente` });
                    }
                });
            }
            catch (error) {
                console.error("Error fatal al crear paciente:", error);
                res.status(500).json({ error: "Error interno del servidor" });
            }
        });
    }
    ModificarPaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_paciente } = req.params;
                const { nombre, ap_paterno, ap_materno, dni, telefono } = req.body;
                const consulta = `
                
                UPDATE public.pacientes
	                SET 
                        nombre=$1, 
                        ap_paterno=$2,  
                        ap_materno=$3, 
                        dni=$4, 
                        telefono=$5, 

	            WHERE  id_paciente=$6;

                `;
                const valores = [nombre, ap_paterno, ap_materno, dni, telefono, new Date()];
                database_1.pool.query(consulta, valores, (error) => {
                    if (error) {
                        console.error('Error al modificar datos de paciente:', error);
                    }
                    else {
                        console.log('Paciente modificado correctamente');
                        res.json({ text: 'Los datos del paciente se modificaron correctamente' });
                    }
                });
            }
            catch (error) {
                console.error('Error fatal al modificar datos del paciente:', error);
                res.status(500).json({ error: 'Error interno del servidor' });
            }
        });
    }
}
const pacienteController = new PacienteController();
exports.default = pacienteController;
