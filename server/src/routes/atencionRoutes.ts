import { Router } from "express"
import atencionController from "../controllers/atencionController"

class AtencionRoutes{
    public router: Router;

    constructor(){
        this.router=Router();
        this.config();
        
    }
    config():void{
  
         this.router.get('/api/atencion/crear', atencionController.crearAtencion);
         this.router.get('/api/atencion/consultar/fecha/:fecha', atencionController.listarAtencionesByFecha);

   
          
    }
}

const atencionRoutes = new AtencionRoutes
export default atencionRoutes.router