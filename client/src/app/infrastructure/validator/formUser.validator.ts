import { ErrorValidacion } from '../../domain/dto/ErrorValidacion.dto';
import { UsuarioModel } from '../../domain/models/Usuario.model';

export function usuario_form_vf( dataUsuario: UsuarioModel, modificar: boolean): ErrorValidacion[] {
    const errorValidacion: ErrorValidacion[] = [];
    
    if (!dataUsuario.nombre) {
      errorValidacion.push({ campo: 'nombres', mensaje: 'Campo requerido' });
    }
    if (!dataUsuario.ap_paterno) {
      errorValidacion.push({ campo: 'ap_paterno', mensaje: 'Campo requerido' });
    }
    if (!dataUsuario.ap_materno) {
      errorValidacion.push({ campo: 'ap_materno', mensaje: 'Campo requerido' });
    }
    
    if (!dataUsuario.username) {
      errorValidacion.push({ campo: 'usuario', mensaje: 'Campo requerido' });
    }
    if (dataUsuario.dni.length>0){

        if ( dataUsuario.dni.length != 8) {
            errorValidacion.push({ campo: 'documento de identidad', mensaje: 'la cantidad en caracteres debe ser 8 para el tipo de documento DNI' });
          }  
    }
    else{
        errorValidacion.push({ campo: 'documento de identidad', mensaje: 'campo requerido' });
    }
    if (!modificar) {
      if (!dataUsuario.password) {
        errorValidacion.push({ campo: 'password', mensaje: 'Campo requerido' });
      }
    }
  
    return errorValidacion;
  }