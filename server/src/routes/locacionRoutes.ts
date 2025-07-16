import { Router} from "express"
import locacionController from "../controllers/locacionController"

class LocacionRouter {
 public router: Router;

    constructor(){
        this.router=Router();
        this.config();
        
    }
    config():void{
  
         this.router.get('/api/locacion/listar',locacionController.listarLocaciones)
         this.router.post('/api/locacion/crear',locacionController.crearLocacion)
         this.router.delete('/api/locacion/eliminar/:id_locacion',locacionController.eliminarLocacion)
   
          
    }
    

}

const locacionRouter = new LocacionRouter
export default locacionRouter.router