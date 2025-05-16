import { Component, ViewChild } from '@angular/core';
import { ConsultaCpfComponent } from './consulta-cpf/consulta-cpf.component';

@Component({
  selector: 'app-admissao-cooperado',
  templateUrl: './admissao-cooperado.component.html',
  styleUrls: ['./admissao-cooperado.component.scss']
})
export class AdmissaoCooperadoComponent {
  stepAtual: number = 1;
  exibirBotao = false;
  @ViewChild(ConsultaCpfComponent) consultaCpfComponent!: ConsultaCpfComponent;

   reiniciarConsulta() {
    this.consultaCpfComponent.resetarFormulario();
  }
}
