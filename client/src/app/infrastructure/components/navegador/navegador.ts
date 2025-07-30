import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/remoto/login/login.service';
import { CredencialesService } from '../../services/local/credenciales/credenciales.service';
import { UsuarioModel } from '../../../domain/models/Usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navegador',
  imports: [],
  templateUrl: './navegador.html',
  styleUrl: './navegador.css'
})
export class Navegador implements OnInit{
 credenciales: UsuarioModel = {
    id_usuario: 0,
    username: '',
    nombre: '',
    ap_paterno: '',
    ap_materno: '',
    dni: '',
    telefono: '',
    estado: false,
  };

  isAdministrador: boolean = false;

  constructor(private router: Router, private loginService: LoginService, private credencialesService: CredencialesService) {
    this.credenciales = this.credencialesService.credenciales

  }

  ngOnInit(): void {
    
  }


  confirmarSalida() {
    Swal.fire({
      title: '¿Desea salir del sistema?',
      text: 'Se cerrará la sesión actual.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, salir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Realiza la acción para salir del sistema, redirección y cierre de sesión
        console.log('Saliendo del sistema...');
        this.loginService.logout();
        this.router.navigate(['/login'])

      }
    });
  }

  configuracion(){
    this.router.navigate(['principal/configuracion'])
  }
}
