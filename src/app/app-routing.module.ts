import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { PartidosComponent } from './pages/partidos/partidos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipos', component: EquiposComponent },
  { path: 'grupos', component: GruposComponent },
  { path: 'partidos', component: PartidosComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }