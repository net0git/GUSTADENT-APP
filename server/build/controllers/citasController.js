"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database/database");
class CitasController {
    crearAtencion(req, res) {
        try {
            const { id_paciente, id_usuario, estado, descripcion, sesion, costo } = req.body;
            const consulta = `
                    INSERT INTO public.atencion(
                        id_paciente, id_usuario, estado, descripcion, sesion, costo)
                        VALUES ($1, $2, $3, $4, $5, $6);`;
            const valores = [id_paciente, id_usuario, estado, descripcion, sesion, costo];
            database_1.pool.query(consulta, valores, (error) => {
                if (error) {
                    console.log(`no es posible ingresar atención al sistema`, error);
                }
                else {
                    console.log('Se registro atención con exito');
                    res.status(200).json({ text: 'Atención registrado con exito' });
                }
            });
        }
        catch (error) {
            res.status(500).json({ text: 'Error interno en el sistema' });
        }
    }
    listarAtencionesByFecha(req, res) {
    }
    listarAtencionByPeriodo(req, res) {
    }
    listarAtencionByPacienteDNI(req, res) {
    }
}
const citasController = new CitasController;
exports.default = citasController;
