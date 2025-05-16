import { Component, Output, EventEmitter } from '@angular/core';
import { CpfConsultaService } from '../../../service/consulta-cpf.service';

@Component({
  selector: 'app-consulta-cpf',
  templateUrl: './consulta-cpf.component.html',
  styleUrls: ['./consulta-cpf.component.scss']
})
export class ConsultaCpfComponent {
  cpf: string = '';
  erro: string | null = null;
  isLoading: boolean = false;
  dadosCPF: any = null;

  @Output() dadosPreenchidos = new EventEmitter<boolean>();

  constructor(private cpfService: CpfConsultaService) { }

  consultarCPF() {
    const cpfLimpo = this.cpf.replace(/\D/g, '');

    if (!cpfLimpo || !this.validarCPF(cpfLimpo)) {
      this.erro = 'CPF inválido';
      this.dadosCPF = null;
      this.dadosPreenchidos.emit(false);
      return;
    }

    this.erro = null;
    this.isLoading = true;

    this.cpfService.consultarCPF(cpfLimpo).subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.length > 0) {
          this.dadosCPF = res[0];
          this.erro = null;
          this.dadosPreenchidos.emit(true);
        } else {
          this.dadosCPF = null;
          this.erro = 'CPF não encontrado';
          this.dadosPreenchidos.emit(false);
        }
      },
      error: () => {
        this.isLoading = false;
        this.dadosCPF = null;
        this.erro = 'Erro ao consultar CPF. Tente novamente.';
        this.dadosPreenchidos.emit(false);
      }
    });
  }

  validarCPF(cpf: string): boolean {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 1; i <= 9; i++) {
      soma += +cpf.charAt(i - 1) * (11 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== +cpf.charAt(9)) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += +cpf.charAt(i - 1) * (12 - i);
    }
    resto = (soma * 10) % 11;

    return resto === +cpf.charAt(10);
  }

  resetarFormulario() {
    this.cpf = '';
    this.erro = null;
    this.dadosCPF = null;
    this.isLoading = false;
    this.dadosPreenchidos.emit(false);
  }
}
