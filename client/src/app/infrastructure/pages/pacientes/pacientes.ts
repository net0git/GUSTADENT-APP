import { Component, OnInit } from '@angular/core';
import { Navegador } from '../../components/navegador/navegador';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SoloLetrasDirective } from '../../directives/solo-letras.directive';
import { SoloNumerosDirective } from '../../directives/solo-numeros.directive';

declare var bootstrap: any;

@Component({
  selector: 'app-pacientes',
  imports: [Navegador, CommonModule,SoloLetrasDirective, SoloNumerosDirective, FormsModule],
  templateUrl: './pacientes.html',
  styleUrl: './pacientes.css'
})
export class Pacientes implements OnInit {
  private myModalPaciente: any;

  lista_pacientes = [
    { nombre: 'Ana', ap_paterno: 'Ramírez', ap_materno: 'López', dni: '12345678', telefono: '987654321' },
    { nombre: 'Carlos', ap_paterno: 'Gonzales', ap_materno: 'Rojas', dni: '87654321', telefono: '987123456' },
    { nombre: 'Lucía', ap_paterno: 'Fernández', ap_materno: 'Pérez', dni: '45678912', telefono: '912345678' },
    { nombre: 'Mario', ap_paterno: 'Castillo', ap_materno: 'Torres', dni: '78945612', telefono: '934567890' },
    { nombre: 'Elena', ap_paterno: 'Morales', ap_materno: 'Vega', dni: '14725836', telefono: '945678123' },
    { nombre: 'Luis', ap_paterno: 'Chávez', ap_materno: 'Silva', dni: '96385274', telefono: '901234567' },
    { nombre: 'Diana', ap_paterno: 'Soto', ap_materno: 'Cruz', dni: '32165498', telefono: '978563210' },
    { nombre: 'Javier', ap_paterno: 'Valdez', ap_materno: 'Mendoza', dni: '25896314', telefono: '965432178' },
    { nombre: 'Rosa', ap_paterno: 'Medina', ap_materno: 'Ramírez', dni: '74185296', telefono: '998877665' },
    { nombre: 'Andrés', ap_paterno: 'Paredes', ap_materno: 'Quiroz', dni: '65478932', telefono: '923456789' }
  ];

  ngOnInit(): void {
    
  }

  openModalPaciente() {
    this.myModalPaciente = new bootstrap.Modal(document.getElementById('modalPaciente'));
    this.myModalPaciente.show();
  }

  closeModalPaciente(){
    this.myModalPaciente.hide();
  }
  
}
