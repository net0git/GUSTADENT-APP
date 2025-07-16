"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database/database");
class AtencionController {
    crearAtencion(req, res) {
        try {
            const { id_paciente, id_usuario, estado, descripcion, sesion, costo } = req.body;
            const consulta = `
                    INSERT INTO public.atencion(
                        id_paciente, id_usuario, estado, descripcion, sesion, costo)
                        VALUES ($1, $2, $3, $4, $5, $6);`;
            const valores = [
                id_paciente,
                id_usuario,
                estado,
                descripcion,
                sesion,
                costo,
            ];
            database_1.pool.query(consulta, valores, (error) => {
                if (error) {
                    console.log(`no es posible ingresar atención al sistema`, error);
                }
                else {
                    console.log("Se registro atención con exito");
                    res.status(200).json({ text: "Atención registrado con exito" });
                }
            });
        }
        catch (error) {
            res.status(500).json({ text: "Error interno en el sistema" });
        }
    }
    listarAtencionesByFecha(req, res) {
        try {
            const { fecha } = req.body;
            const consulta = `select * from atencion where create_at = $1`;
            const valores = [fecha];
            database_1.pool.query(consulta, valores, (error) => {
                if (error) {
                    console.log(`no es posible ingresar atención al sistema`, error);
                }
                else {
                    console.log("Se registro atención con exito");
                    res.status(200).json({ text: "Atención registrado con exito" });
                }
            });
        }
        catch (error) {
            res.status(500).json({ text: "Error interno en el sistema" });
        }
    }
    listarAtencionByPeriodo(req, res) {
        try {
            const { fecha_inicial, fecha_final } = req.body;
            const consulta = `
            SELECT * 
            FROM atencion 
            WHERE created_at BETWEEN $1 AND $2
        `;
            const valores = [fecha_inicial, fecha_final];
            database_1.pool.query(consulta, valores, (error, resultados) => {
                if (error) {
                    console.error(`No fue posible listar atenciones:`, error);
                    return res
                        .status(500)
                        .json({ text: "Error al obtener las atenciones" });
                }
                res.status(200).json(resultados.rows);
            });
        }
        catch (error) {
            console.error("Error interno:", error);
            res.status(500).json({ text: "Error interno en el sistema" });
        }
    }
    listarAtencionByPacienteDNI(req, res) {
        try {
            const { dni } = req.body;
            const consulta = `
            SELECT a.* 
            FROM atencion a
            INNER JOIN pacientes p ON a.id_paciente = p.id_paciente
            WHERE p.dni = $1
        `;
            const valores = [dni];
            database_1.pool.query(consulta, valores, (error, resultados) => {
                if (error) {
                    console.error('Error al listar las atenciones por DNI:', error);
                    return res.status(500).json({ text: 'Error al obtener las atenciones' });
                }
                res.status(200).json(resultados.rows);
            });
        }
        catch (error) {
            console.error('Error interno:', error);
            res.status(500).json({ text: 'Error interno en el sistema' });
        }
    }
}
const atencionController = new AtencionController();
exports.default = atencionController;
