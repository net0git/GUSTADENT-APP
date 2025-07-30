import { Injectable } from '@angular/core';
import { UsuarioModel } from '../../../../domain/models/Usuario.model';

@Injectable({
  providedIn: 'root',
})
export class CredencialesService {

  private usuario: UsuarioModel = {
    id_usuario: 0,
    username: '',
    
    nombre: '',
    ap_paterno: '',
    ap_materno: '',
    dni: '',
    estado: null,
    telefono: '',
  };

  constructor() {}

  get credenciales(): UsuarioModel {
    return this.usuario;
  }

  set credenciales(value: UsuarioModel) {
    this.usuario = value;
  }

  clear(): void {
    this.usuario = {
      id_usuario: 0,
      username: '',
      nombre: '',
      ap_paterno: '',
      ap_materno: '',
      dni: '',
      estado: null,
      telefono: '',
    };
  }
}
