import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/remoto/usuario/usuario.service';
import { UsuarioModel } from '../../../domain/models/Usuario.model';
import { UsuarioRequest } from '../../../domain/dto/UsuarioRequest.dto';
import { CrearUsuarioResponse, UsuarioListResponse } from '../../../domain/dto/UsuarioResponse.dto';
import { SoloLetrasDirective } from '../../directives/solo-letras.directive';
import { SoloNumerosDirective } from '../../directives/solo-numeros.directive';
declare var bootstrap: any;

@Component({
  selector: 'app-usuarios',
  imports: [CommonModule, FormsModule, SoloNumerosDirective, SoloLetrasDirective],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios implements OnInit {
  private myModalUsuario: any;

  lista_usuarios : UsuarioListResponse[]=[]

  data_usuario: UsuarioModel = {
    id_usuario: 0,
    username: '',
    password: '',
    nombre: '',
    telefono: '',
    ap_paterno: '',
    ap_materno: '',
    dni: '',
    estado: false,
  };

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.ListarUsuarios()
  }

  openModalUsuario() {
    this.myModalUsuario = new bootstrap.Modal(
      document.getElementById('modalUsuario')
    );
    this.myModalUsuario.show();
  }

  closeModalUsuario() {
    this.myModalUsuario.hide();
  }

  CrearUsuario() {
    let data_usuario_temp: UsuarioRequest = {
      username: this.data_usuario.username,
      password: this.data_usuario.password,
      nombre: this.data_usuario.nombre,
      telefono: this.data_usuario.telefono,
      ap_paterno: this.data_usuario.ap_paterno,
      ap_materno: this.data_usuario.ap_materno,
      dni: this.data_usuario.dni,
      estado: this.data_usuario.estado,
    };

    console.log(data_usuario_temp)

    this.usuarioService.crearUsuario(data_usuario_temp).subscribe({
      next: (data:CrearUsuarioResponse) => {
          console.log(data.message)
      },
      error: (err) => {
        console.error(err);
      },
      complete:()=>{
        this.closeModalUsuario()
      }
    });
  }

  ListarUsuarios(){
    this.usuarioService.listarUsuarios().subscribe({
      next:(data:UsuarioListResponse[])=>{
        this.lista_usuarios=data
        console.log(this.lista_usuarios)
      },
      error:(err)=>{
        console.error(err)
      },
      complete:()=>{
        console.log('lista de usuarios completados')
      }
    })
  }
}
