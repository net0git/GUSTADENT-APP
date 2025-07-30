import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-locacion',
  imports: [CommonModule,FormsModule],
  templateUrl: './locacion.html',
  styleUrl: './locacion.css'
})
export class Locacion {

  private myModalLocacion: any;

  openModalLocacion() {
    this.myModalLocacion = new bootstrap.Modal(document.getElementById('modalLocacion'));
    this.myModalLocacion.show();
  }

  closeModalLocacion(){
    this.myModalLocacion.hide();
  }

}
