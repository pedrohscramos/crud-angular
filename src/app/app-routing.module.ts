import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaCreateComponent } from './components/pessoa-create/pessoa-create.component';
import { PessoaDetailsComponent } from './components/pessoa-details/pessoa-details.component';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';

const routes: Routes = [
  { path: '',  redirectTo: 'pessoas', pathMatch: 'full' },
  { path: 'pessoas', component: PessoaListComponent },
  { path: 'pessoas/:id', component: PessoaDetailsComponent },
  { path: 'create', component: PessoaCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
