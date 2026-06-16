import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { PartidosComponent } from './pages/partidos/partidos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EquiposComponent,
    GruposComponent,
    PartidosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }