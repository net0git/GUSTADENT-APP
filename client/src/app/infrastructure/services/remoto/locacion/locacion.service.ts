import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environment/environment';
import { HttpClient } from '@angular/common/http'; 
import { LocacionRequest } from '../../../../domain/dto/LocacionRequest.dto';
import { Observable } from 'rxjs';
import { LocacinoCrearResponse, LocacionListResponse } from '../../../../domain/dto/LocacionResponse.dto';

@Injectable({
  providedIn: 'root'
})
export class LocacionService {

  link_url = environment.urlApi+'/locacion'
  
  constructor(private http:HttpClient){}

  crearLocacion(cuerpo_locacion:LocacionRequest):Observable<LocacinoCrearResponse>{
    return this.http.post<LocacinoCrearResponse>(`${this.link_url}/crear`,cuerpo_locacion)
  }

  listarLocaciones():Observable<LocacionListResponse[]>{
    return this.http.get<LocacionListResponse[]>(`${this.link_url}/listar`)
  }
}
