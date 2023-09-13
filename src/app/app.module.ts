import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { GestaoSquadsComponent } from './gestao-squads/gestao-squads.component';
import { SairComponent } from './sair/sair.component';
import { CarroselComponent } from './carrosel/carrosel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { DataFormModule } from './data-form/data-form.module';





@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    HomeComponent,
    MeuPerfilComponent,
    GestaoSquadsComponent,
    SairComponent,
    CarroselComponent,
    CabecalhoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    DataFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
