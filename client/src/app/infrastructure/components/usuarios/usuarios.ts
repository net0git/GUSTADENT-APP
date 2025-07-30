import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-usuarios',
  imports: [CommonModule,FormsModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class Usuarios {

  private myModalUsuario: any;

  openModalUsuario() {
    this.myModalUsuario = new bootstrap.Modal(document.getElementById('modalUsuario'));
    this.myModalUsuario.show();
  }

  closeModalUsuario(){
    this.myModalUsuario.hide();
  }

}
