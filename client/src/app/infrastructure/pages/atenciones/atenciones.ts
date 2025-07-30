import { Component } from '@angular/core';
import { Navegador } from '../../components/navegador/navegador';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-atenciones',
  imports: [Navegador , CommonModule, FormsModule],
  templateUrl: './atenciones.html',
  styleUrl: './atenciones.css'
})
export class Atenciones {

  listAtenciones : any = [] 

  constructor( private router:Router){}

  atencionPersonal(id_atencion:number){
    this.router.navigate(['principal/atenciones/personal/',id_atencion])
  }
}
