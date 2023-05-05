import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { ModificarComponent } from './modificar/modificar.component';

const routes: Routes = [
  { path:'', component: ListarComponent },
  { path:'listar', component: ListarComponent },
  { path:'cadastrar', component: CadastrarComponent },
  { path:'modificar', component: ModificarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
