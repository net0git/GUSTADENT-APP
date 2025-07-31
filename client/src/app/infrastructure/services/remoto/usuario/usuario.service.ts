import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { UsuarioRequest } from '../../../../domain/dto/UsuarioRequest.dto';
import { Observable } from 'rxjs';
import { CrearUsuarioResponse, UsuarioListResponse } from '../../../../domain/dto/UsuarioResponse.dto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  api_url_usuario=`${environment.urlApi}/usuario`
  // api/usuario/listar

  constructor(private http: HttpClient){}

  crearUsuario(cuerpo_usuario: UsuarioRequest):Observable<CrearUsuarioResponse>{
    cuerpo_usuario.username=cuerpo_usuario.username.trim().toUpperCase()
    cuerpo_usuario.nombre=cuerpo_usuario.nombre.trim().toUpperCase()
    cuerpo_usuario.ap_paterno=cuerpo_usuario.ap_paterno.trim().toUpperCase()
    cuerpo_usuario.ap_materno=cuerpo_usuario.ap_materno.trim().toUpperCase()
    cuerpo_usuario.dni=cuerpo_usuario.dni.trim()
    return this.http.post<CrearUsuarioResponse>(`${this.api_url_usuario}/crear`, cuerpo_usuario);
  }

  listarUsuarios():Observable<UsuarioListResponse[]>{
    return this.http.get<UsuarioListResponse[]>(`${this.api_url_usuario}/listar`)
  }
  
}
