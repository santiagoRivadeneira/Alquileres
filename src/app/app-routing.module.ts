import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CrearPropiedadComponent } from './crear-propiedad/crear-propiedad.component';
import { LoginComponent } from './login/login.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  {path: "registrar", component: RegistrarComponent},
  {path: "login", component: LoginComponent},
  {path: "crear", component: CrearPropiedadComponent},
  {path: "propiedades", component: PropiedadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  

})
export class AppRoutingModule { }
