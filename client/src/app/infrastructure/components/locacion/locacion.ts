import { Component, Directive, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocacionService } from '../../services/remoto/locacion/locacion.service';
import { LocacionModel } from '../../../domain/models/Locacion.model';
import { LocacionRequest } from '../../../domain/dto/LocacionRequest.dto';
import { LocacinoCrearResponse, LocacionListResponse } from '../../../domain/dto/LocacionResponse.dto';
declare var bootstrap: any;

@Component({
  selector: 'app-locacion',
  imports: [CommonModule,FormsModule],
  templateUrl: './locacion.html',
  styleUrl: './locacion.css'
})
export class Locacion implements OnInit {

  private myModalLocacion: any;
  listLocacion: LocacionListResponse[] =[]

  locacion:LocacionModel={
    locacion:'',
    direccion:''
  }

  constructor(private locacionService: LocacionService){}
 ngOnInit(): void {
   this.listarLocaciones();
 }

  openModalLocacion() {
    this.myModalLocacion = new bootstrap.Modal(document.getElementById('modalLocacion'));
    this.myModalLocacion.show();
  }

  closeModalLocacion(){
    this.myModalLocacion.hide();
  }

  guardarLocacion(){
    let locacionBody:LocacionRequest={
      locacion:this.locacion.locacion,
      direccion:this.locacion.direccion
    }
    
    this.locacionService.crearLocacion(locacionBody).subscribe({
      next:(value: LocacinoCrearResponse)=>{
        
        console.log(value)
      },
      error:(err)=>{
        console.error(err);
      },
      complete:()=>{
        console.log('la locacion se guardo correctamente')
        this.listarLocaciones()
        this.closeModalLocacion()
      }
    })
  }

  listarLocaciones(){
    this.locacionService.listarLocaciones().subscribe({
      next:(value:LocacionListResponse[])=>{
        this.listLocacion=value
        console.log(value)
      },
      error:(err)=>{
        console.error(err)
      },
      complete:()=>{
        console.log('lista de locaciones completada')
      }
    })
  }

}
