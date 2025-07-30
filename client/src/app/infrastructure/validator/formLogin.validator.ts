import { ErrorValidacion } from "../../domain/dto/ErrorValidacion.dto";
import { LoginRequest } from "../../domain/dto/LoginRequest.dto";


export function login_form_vf(credenciales: LoginRequest): ErrorValidacion[] {
    const errorValidacion: ErrorValidacion[] = [];
    if (!credenciales.username) {
      errorValidacion.push({ campo: 'usuario', mensaje: 'Campo requerido' });
    }
    if (!credenciales.password) {
      errorValidacion.push({ campo: 'password', mensaje: 'Campo requerido' });
    }
    return errorValidacion;
  }