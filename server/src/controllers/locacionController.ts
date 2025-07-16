import { Request, Response } from "express";
import { pool } from "../database/database";

class LocacionController {
  public async listarLocaciones(req: Request, res: Response) {
    try {
      const consulta = `select * from locacion`;
       const locaciones = await pool.query(consulta);
       res.status(200).json(locaciones["rows"])
    } catch (error) {
        console.log('error interno en el servidor');
        res.status(500).json({text:'error interno en el servidor'})
    }
  }

  public async crearLocacion(req: Request, res: Response){
    try {
        const {locacion, direccion} = req.body
        const consulta = `
                INSERT INTO public.locacion(
	                locacion, direccion)
	            VALUES ($1, $2);`
        const valores =[ locacion, direccion]
        pool.query(consulta, valores, (error)=>{
            if(error){
                console.log('no se pudo registrar locacion')
            }
            else{
                res.status(200).json({text:'registro de locacion correcto'})
            }
        })
    } catch (error) {
        console.log('error interno en el servidor')
        res.status(500).json({text:'error interno en el servidor'})
    }
  }

public async eliminarLocacion(req: Request, res: Response) {
    try {
        const { id_locacion } = req.params;

        const consulta = `
            DELETE FROM public.locacion
            WHERE id_locacion = $1;
        `;
        const valores = [id_locacion];

        pool.query(consulta, valores, (error, resultado) => {
            if (error) {
                console.log('No se pudo eliminar la locación:', error);
                res.status(500).json({ text: 'Error al eliminar la locación' });
            } else if (resultado.rowCount === 0) {
                res.status(404).json({ text: 'Locación no encontrada' });
            } else {
                res.status(200).json({ text: 'Locación eliminada correctamente' });
            }
        });

    } catch (error) {
        console.log('Error interno en el servidor:', error);
        res.status(500).json({ text: 'Error interno en el servidor' });
    }
}


}
const locacionController = new LocacionController();
export default locacionController;
