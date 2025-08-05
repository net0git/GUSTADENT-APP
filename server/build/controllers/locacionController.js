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
class LocacionController {
    listarLocaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const consulta = `select * from locacion`;
                const locaciones = yield database_1.pool.query(consulta);
                res.status(200).json(locaciones["rows"]);
            }
            catch (error) {
                console.log('error interno en el servidor');
                res.status(500).json({ message: 'error interno en el servidor' });
            }
        });
    }
    crearLocacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { locacion, direccion } = req.body;
                const consulta = `
                INSERT INTO public.locacion(
	                locacion, direccion)
	            VALUES ($1, $2);`;
                const valores = [locacion, direccion];
                database_1.pool.query(consulta, valores, (error) => {
                    if (error) {
                        console.log('no se pudo registrar locacion');
                    }
                    else {
                        res.status(200).json({ message: 'registro de locacion correcto' });
                    }
                });
            }
            catch (error) {
                console.log('error interno en el servidor');
                res.status(500).json({ message: 'error interno en el servidor' });
            }
        });
    }
    eliminarLocacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_locacion } = req.params;
                const consulta = `
            DELETE FROM public.locacion
            WHERE id_locacion = $1;
        `;
                const valores = [id_locacion];
                database_1.pool.query(consulta, valores, (error, resultado) => {
                    if (error) {
                        console.log('No se pudo eliminar la locación:', error);
                        res.status(500).json({ message: 'Error al eliminar la locación' });
                    }
                    else if (resultado.rowCount === 0) {
                        res.status(404).json({ message: 'Locación no encontrada' });
                    }
                    else {
                        res.status(200).json({ message: 'Locación eliminada correctamente' });
                    }
                });
            }
            catch (error) {
                console.log('Error interno en el servidor:', error);
                res.status(500).json({ message: 'Error interno en el servidor' });
            }
        });
    }
}
const locacionController = new LocacionController();
exports.default = locacionController;
