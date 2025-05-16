import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms'; 
import { ConsultaCpfComponent } from './pages/admissao-cooperado/consulta-cpf/consulta-cpf.component';
import { DadosCooperadoComponent } from './pages/admissao-cooperado/consulta-cpf/dados-cooperado/dados-cooperado.component';
import { AdmissaoCooperadoComponent } from './pages/admissao-cooperado/admissao-cooperado.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ConsultaCpfComponent,
    DadosCooperadoComponent,
    AdmissaoCooperadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule {}
