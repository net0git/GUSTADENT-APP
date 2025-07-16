import { Request, Response } from "express";
import { pool } from "../database/database";

class AtencionController {
  public crearAtencion(req: Request, res: Response) {
    try {
      const { id_paciente, id_usuario, estado, descripcion, sesion, costo } =
        req.body;
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
      pool.query(consulta, valores, (error) => {
        if (error) {
          console.log(`no es posible ingresar atención al sistema`, error);
        } else {
          console.log("Se registro atención con exito");
          res.status(200).json({ text: "Atención registrado con exito" });
        }
      });
    } catch (error) {
      res.status(500).json({ text: "Error interno en el sistema" });
    }
  }

  public listarAtencionesByFecha(req: Request, res: Response) {
    try {
      const { fecha } = req.body;
      const consulta = `select * from atencion where create_at = $1`;
      const valores = [fecha];
      pool.query(consulta, valores, (error) => {
        if (error) {
          console.log(`no es posible ingresar atención al sistema`, error);
        } else {
          console.log("Se registro atención con exito");
          res.status(200).json({ text: "Atención registrado con exito" });
        }
      });
    } catch (error) {
      res.status(500).json({ text: "Error interno en el sistema" });
    }
  }

  public listarAtencionByPeriodo(req: Request, res: Response) {
    try {
      const { fecha_inicial, fecha_final } = req.body;

      const consulta = `
            SELECT * 
            FROM atencion 
            WHERE created_at BETWEEN $1 AND $2
        `;
      const valores = [fecha_inicial, fecha_final];

      pool.query(consulta, valores, (error, resultados) => {
        if (error) {
          console.error(`No fue posible listar atenciones:`, error);
          return res
            .status(500)
            .json({ text: "Error al obtener las atenciones" });
        }

        res.status(200).json(resultados.rows);
      });
    } catch (error) {
      console.error("Error interno:", error);
      res.status(500).json({ text: "Error interno en el sistema" });
    }
  }

public listarAtencionByPacienteDNI(req: Request, res: Response) {
    try {
        const { dni } = req.body;

        const consulta = `
            SELECT a.* 
            FROM atencion a
            INNER JOIN pacientes p ON a.id_paciente = p.id_paciente
            WHERE p.dni = $1
        `;
        const valores = [dni];

        pool.query(consulta, valores, (error, resultados) => {
            if (error) {
                console.error('Error al listar las atenciones por DNI:', error);
                return res.status(500).json({ text: 'Error al obtener las atenciones' });
            }

            res.status(200).json(resultados.rows);
        });

    } catch (error) {
        console.error('Error interno:', error);
        res.status(500).json({ text: 'Error interno en el sistema' });
    }
}}

const atencionController = new AtencionController();
export default atencionController;
