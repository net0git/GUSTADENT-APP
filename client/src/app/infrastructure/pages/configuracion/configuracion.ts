import { Component } from '@angular/core';
import { Navegador } from '../../components/navegador/navegador';
import { Usuarios } from '../../components/usuarios/usuarios';
import { Locacion } from '../../components/locacion/locacion';

@Component({
  selector: 'app-configuracion',
  imports: [Navegador,Usuarios, Locacion],
  templateUrl: './configuracion.html',
  styleUrl: './configuracion.css'
})
export class Configuracion {

}
