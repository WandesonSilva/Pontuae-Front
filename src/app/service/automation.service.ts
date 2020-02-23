import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Security } from '../utils/security.util';
import { Automation } from '../models/automation';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})

export class AutomationService {
 
  constructor(private http: HttpClient) {
  }

  public composeHeaders() {
    const token = localStorage.getItem('tokenPontuaae');
    const headers = new HttpHeaders().set('autorization', 'token');
    return headers;

}

  createAutomation(data: any) {
    // tslint:disable-next-line: radix
    const id = Security.getUser().idEmpresa;
    data.IdEmpresa = id;
    return this.http.post(`${environment.UrlBase}v1/Automacao`, data, { headers: this.composeHeaders() });
  }

  updateAutomation(data: any) {
    const id = Security.getUser().idEmpresa;
    data.IdEmpresa = id;
    return this.http.put(`${environment.UrlBase}/Automacao`, data, { headers: this.composeHeaders() });
  }

  desableAutomation(id: number) {
    const idEmpresa = Security.getUser().idEmpresa;
    return this.http.put(`${environment.UrlBase}v1/Automacao/${id}/${idEmpresa}`, {headers: this.composeHeaders()})
  }

  deleteAutomation(id: number){
    const idEmpresa = Security.getUser().idEmpresa;   
    return this.http.delete(`${environment.UrlBase}v1/Automacao/${id}/${idEmpresa}`, {headers: this.composeHeaders()})
  }
  

  getListAutomation( idEmpresa: number) {
    return this.http.get<Automation[]>(`${environment.UrlBase}/Automacao/${idEmpresa}`, { headers: this.composeHeaders() });
  }

  // lista, apura se vai precisa de dois parametros para fazer get
  getByIdAutomation(id: number, idEmpresa: number) {
    return this.http.get<Automation[]>(`${environment.UrlBase}/Automacao/${id}/${idEmpresa}`, { headers: this.composeHeaders() });
  }

}
