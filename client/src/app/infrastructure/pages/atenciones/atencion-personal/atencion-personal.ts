import { Component } from '@angular/core';
import { Navegador } from '../../../components/navegador/navegador';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atencion-personal',
  imports: [Navegador, CommonModule, FormsModule],
  templateUrl: './atencion-personal.html',
  styleUrl: './atencion-personal.css'
})
export class AtencionPersonal {

}
