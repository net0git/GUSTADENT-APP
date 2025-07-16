import { Router } from "express";
import usuarioController from "../controllers/usuarioController";


class UsuariosRoutes{

    public router: Router;

    constructor(){
        this.router=Router();
        this.config();
        
    }
    config():void{
  
         this.router.get('/api/usuario/listar',usuarioController.listarUsuarios)
         this.router.post('/api/usuario/crear', usuarioController.CrearUsuario)
         this.router.get('/api/usuario/:id_usuario',usuarioController.ObtenerUsuario)
         this.router.post('/api/usuario/login',usuarioController.ValidarLogin)
   
          
    }
}

const usuariosRoutes = new UsuariosRoutes
export default usuariosRoutes.router;