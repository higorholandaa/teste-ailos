import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root' 
})
export class CpfConsultaService {
  private readonly baseUrl = 'http://localhost:3000/cpfConsulta';

  constructor(private http: HttpClient) {}

  consultarCPF(cpf: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?cpf=${cpf}`);
  }
}
