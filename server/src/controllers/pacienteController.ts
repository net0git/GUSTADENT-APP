import { Request, Response } from "express";
import { encriptar, comparar } from "../encrytor/encryptor";
import { pool } from "../database/database";

class PacienteController {

    public async listarPacientes(req: Request, res: Response): Promise<any> {
    try {
      const consulta = `SELECT * FROM pacientes`;
      const usuarios = await pool.query(consulta);
      res.json(usuarios["rows"]);
    } catch (error) {
      console.error("Error fatal al obtener detalle de usuarios:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
   }

    public async CrearPaciente(req: Request, res: Response) {
    try {
      const {
        nombre,
        ap_paterno,
        ap_materno,
        dni,
        telefono
      } = req.body;
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
      pool.query(consulta, valores, (error) => {
        if (error) {
          console.error(`Error al crear paciente ${nombre }:`, error);
        } else {
          console.log(`Paciente ${nombre} creado correctamente`);
          res.json({ text: `Paciente ${nombre} se ha creado correctamente` });
        }
      });
    } catch (error) {
      console.error("Error fatal al crear paciente:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  public async ModificarPaciente(req: Request, res: Response){
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

            pool.query(consulta, valores, (error) => {
                if (error) {
                    console.error('Error al modificar datos de paciente:', error);
                } else {
                    console.log('Paciente modificado correctamente');
                    res.json({ text: 'Los datos del paciente se modificaron correctamente' });
                }
            });
        } catch (error) {
            console.error('Error fatal al modificar datos del paciente:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
  }

}

const pacienteController = new PacienteController();
export default pacienteController