import { Component } from '@angular/core';
import { Navegador } from '../../components/navegador/navegador';
import { Router } from '@angular/router';
import { CredencialesService } from '../../services/local/credenciales/credenciales.service';

@Component({
  selector: 'app-principal',
  imports: [Navegador],
  templateUrl: './principal.html',
  styleUrl: './principal.css'
})
export class Principal {

  constructor(
    private router:Router,
    private credencialesService:CredencialesService 
  ){}

  pacientesPage(){
    this.router.navigate(['principal/pacientes'])
  }

  atencionesPage(){
    this.router.navigate(['principal/atenciones'])
  }
  reportesPage(){
    this.router.navigate(['principal/reportes'])
  }


}
