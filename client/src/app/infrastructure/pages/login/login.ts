import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { LoginService } from '../../services/remoto/login/login.service';
import { LoginRequest } from '../../../domain/dto/LoginRequest.dto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

credentials: LoginRequest = {
    username: '',
    password: ''
  };

  constructor(private loginService:LoginService,private router: Router){}

  async login() {
    try {
      const authResponse = await firstValueFrom(this.loginService.login(this.credentials));
      if (authResponse) {
        console.log('Se logueó correctamente: ' + this.loginService.isAuthenticatedUser());
        this.router.navigate(['principal']);
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (error) {
      console.error(error);
      alert('Error al intentar autenticar');
    }
  }

}
