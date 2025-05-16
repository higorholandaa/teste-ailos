import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-cooperado',
  templateUrl: './dados-cooperado.component.html',
  styleUrl: './dados-cooperado.component.scss'
})
export class DadosCooperadoComponent implements OnInit {
  @Input() dados: any;
  contaAplicacao: any;
  contaCorrente: any;

  ngOnInit(): void {
  }
}
