import { Router } from "express";
import pacienteController from "../controllers/pacienteController"


class PacientesRoutes{

    public router: Router;

    constructor(){
        this.router=Router();
        this.config();
        
    }
    config():void{
  
         this.router.get('/api/paciente/listar',pacienteController.listarPacientes);
         this.router.post('/api/paciente/crear',pacienteController.CrearPaciente)
    }
}

const pacientesRoutes = new PacientesRoutes
export default pacientesRoutes.router;