import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environment/environment'
import { HttpClient } from '@angular/common/http';
import { CredencialesService } from '../../local/credenciales/credenciales.service';
import { LoginRequest } from '../../../../domain/dto/LoginRequest.dto';
import { catchError, map, Observable, throwError } from 'rxjs';
import { login_form_vf } from '../../../validator/formLogin.validator';
import { UsuarioLoginResponse } from '../../../../domain/dto/LoginResponse.dto';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
   private isAuthenticated = false;
   private url_api_login = `${environment.urlApi}/usuario/login`;

  constructor(
    private http: HttpClient,
    private credencialesService: CredencialesService
  ) {}

  login(credenciales: LoginRequest): Observable<any> {
    const erroresValidacion = login_form_vf(credenciales);
    if (erroresValidacion.length > 0) {
      let errorMensaje = '';
      erroresValidacion.forEach(error => {
        errorMensaje += `Error en el campo :"${error.campo}": ${error.mensaje}`;
      });
      return throwError(() => errorMensaje);
    }
   
    //  return this.http.post(this.url_api_login,credenciales)
    
    return this.http.post<UsuarioLoginResponse>(this.url_api_login, credenciales).pipe(
      map((response: UsuarioLoginResponse) => {
        console.log('response',response)
        if (response.success) {
          this.credencialesService.credenciales = {
            id_usuario: response.id_usuario,
            username: response.username,
            nombre: response.nombre,
            ap_paterno: response.ap_paterno,
            ap_materno: response.ap_materno,
            dni: response.dni,
            estado: response.estado,
            telefono:response.telefono
          };
          console.log(this.credencialesService.credenciales);
          this.isAuthenticated = true;
          return true;
        }
        return false;
      }),
      catchError((error) => {
        console.error('Error al iniciar sesión:', error);
        return throwError(() => new Error('No se pudo iniciar sesión'));
      })
    );
  }

  logout(): void {
    this.isAuthenticated = false;
    this.credencialesService.clear();
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
  
}
