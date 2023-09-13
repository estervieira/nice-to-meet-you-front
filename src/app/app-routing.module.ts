import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { GestaoSquadsComponent } from './gestao-squads/gestao-squads.component';
import { SairComponent } from './sair/sair.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'meuPerfil', component: MeuPerfilComponent},
  {path: 'gestaoSquads', component: GestaoSquadsComponent},
  {path: 'sair', component: SairComponent},
  { path: '', pathMatch: 'full', redirectTo: 'dataForm' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
