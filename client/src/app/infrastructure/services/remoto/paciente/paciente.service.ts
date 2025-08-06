import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { CrearPacienteResponse, PacienteListResponse } from '../../../../domain/dto/PacienteResponse.dto'
import { Observable } from 'rxjs';
import { PacienteRequest } from '../../../../domain/dto/PacienteRequest.dto';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  api_url_paciente=`${environment.urlApi}/paciente`
  
  constructor(private http: HttpClient){}

  listarPacientes():Observable<PacienteListResponse[]>{
    return this.http.get<PacienteListResponse[]>(`${this.api_url_paciente}/listar`)
  }

  crearPaciente(paciente_cuerpo: PacienteRequest):Observable<CrearPacienteResponse>{
    paciente_cuerpo.nombre=paciente_cuerpo.nombre.trim().toUpperCase();
    paciente_cuerpo.ap_paterno=paciente_cuerpo.ap_paterno.trim().toUpperCase()
    paciente_cuerpo.ap_materno=paciente_cuerpo.ap_materno.trim().toUpperCase()
    return this.http.post<CrearPacienteResponse>(`${this.api_url_paciente}/crear`,paciente_cuerpo)
  }
}
