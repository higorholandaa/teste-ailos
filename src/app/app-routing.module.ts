import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosCooperadoComponent } from './pages/admissao-cooperado/consulta-cpf/dados-cooperado/dados-cooperado.component';
import { AdmissaoCooperadoComponent } from './pages/admissao-cooperado/admissao-cooperado.component';

const routes: Routes = [
  { path: '', redirectTo: 'consulta', pathMatch: 'full' },
  {
    path: 'consulta',
    component: AdmissaoCooperadoComponent,
    data: { title: 'Cadastro cooperado' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
