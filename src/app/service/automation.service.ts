import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Security } from '../utils/security.util';
import { Automation } from '../models/automation';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })

export class AutomationService {

  constructor(private http: HttpClient) {
  }

  public composeHeaders() {
    const token = localStorage.getItem('tokenPontuaae');
    const headers = new HttpHeaders().set('autorization', 'token');
    return headers;

  }
//ok
  createAutomation(data: Automation) {
    const id = Security.getUser().idEmpresa;
    data.idEmpresa= id;
    return this.http.post(`${environment.UrlBase}/v1/automacao/v1/post`, data);
  }

//ok
  updateAutomation(data: Automation) {
    const id = Security.getUser().idEmpresa;
    data.idEmpresa = id;
    return this.http.put(`${environment.UrlBase}/v1/automacao/v1/put`, data);
  }

  //averiguar este metodo
  desableAutomation(id: number, idEmpresa: number) {
    return this.http.put(`${environment.UrlBase}/v1/automacao/v1/Desativar/${id}/${idEmpresa}`, { headers: this.composeHeaders() })
  }
//ok
  getListAutomation(idEmpresa: number, estado: number) {
    return this.http.get<Automation[]>(`${environment.UrlBase}/v1/automacao/v1/Lista/${idEmpresa}/${estado}`, { headers: this.composeHeaders() });
  }
//ok
  getListReturnCustomerAutomation(id: number, idEmpresa: number): any { //verifica se vai se usado
    return this.http.get<any[]>(`${environment.UrlBase}/v1/automacao/v1/${id}/${idEmpresa}`, { headers: this.composeHeaders() });
  }

//ok
  getByIdAutomation(id: number, idEmpresa: number) {
    return this.http.get<any>(`${environment.UrlBase}/v1/automacao/v1/Detalhe/${id}/${idEmpresa}`, { headers: this.composeHeaders() });
  }
}
