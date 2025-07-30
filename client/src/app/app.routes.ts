import { Routes } from '@angular/router';
import { Login } from './infrastructure/pages/login/login';
import { Principal } from './infrastructure/pages/principal/principal';
import { Pacientes } from './infrastructure/pages/pacientes/pacientes';
import { Atenciones } from './infrastructure/pages/atenciones/atenciones';
import { Reportes } from './infrastructure/pages/reportes/reportes';
import { AtencionPersonal } from './infrastructure/pages/atenciones/atencion-personal/atencion-personal';
import { Configuracion } from './infrastructure/pages/configuracion/configuracion';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'principal',
    component: Principal
  },
  {
    path: 'principal/pacientes',
    component: Pacientes
  },
  {
    path: 'principal/atenciones',
    component: Atenciones
  },
  {
    path: 'principal/reportes',
    component: Reportes
  },
  {
    path: 'principal/atenciones/personal/:id_atencion',
    component: AtencionPersonal
  },
  {
    path: 'principal/configuracion',
    component: Configuracion
  },
  { path: '**', redirectTo: 'login' }

];
