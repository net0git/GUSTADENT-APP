import { Component } from '@angular/core';
import { Navegador } from '../../components/navegador/navegador';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reportes',
  imports: [Navegador, FormsModule, CommonModule],
  templateUrl: './reportes.html',
  styleUrl: './reportes.css'
})
export class Reportes {

}
