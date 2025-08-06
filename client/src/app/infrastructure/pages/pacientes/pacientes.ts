import { Component, OnInit } from '@angular/core';
import { Navegador } from '../../components/navegador/navegador';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SoloLetrasDirective } from '../../directives/solo-letras.directive';
import { SoloNumerosDirective } from '../../directives/solo-numeros.directive';
import { PacienteService } from '../../services/remoto/paciente/paciente.service';
import { CrearPacienteResponse, PacienteListResponse } from '../../../domain/dto/PacienteResponse.dto';
import { PacienteRequest } from '../../../domain/dto/PacienteRequest.dto';


declare var bootstrap: any;

@Component({
  selector: 'app-pacientes',
  imports: [Navegador, CommonModule,SoloLetrasDirective, SoloNumerosDirective, FormsModule],
  templateUrl: './pacientes.html',
  styleUrl: './pacientes.css'
})
export class Pacientes implements OnInit {
  private myModalPaciente: any;

  lista_pacientes:PacienteListResponse[] = [];

  paciente_temp: PacienteRequest={
    nombre:'',
    ap_materno:'',
    ap_paterno:'',
    dni:'',
    telefono:''
  }

  constructor(private pacienteService:PacienteService){}

  ngOnInit(): void {
    this.listarPacientes();
  }

  openModalPaciente() {
    this.myModalPaciente = new bootstrap.Modal(document.getElementById('modalPaciente'));
    this.myModalPaciente.show();
  }

  closeModalPaciente(){
    this.myModalPaciente.hide();
  }

  listarPacientes(){
    this.pacienteService.listarPacientes().subscribe({
      next:(data:PacienteListResponse[])=>{
        this.lista_pacientes=data
      },
      error:(err)=>{
        console.error(err)
      },
      complete:()=>{
        console.log('lista de pacientes recuperada')
      }
    });
  }

  guardarPaciente(){
    let data_paciente:PacienteRequest=this.paciente_temp
    this.pacienteService.crearPaciente(data_paciente).subscribe({
      next:(data:CrearPacienteResponse)=>{
        console.log(data.message)
      },
      error:(err)=>{
        console.error(err);
      },
      complete:()=>{
        console.log('paciente guardado correctamente')
        this.listarPacientes();
        this.closeModalPaciente();
      }

    })
  }
  


  
}
