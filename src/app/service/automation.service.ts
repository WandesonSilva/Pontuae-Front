import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Security } from '../utils/security.util';
import { Automation } from '../models/automation';

@Injectable({providedIn: 'root'})

export class AutomationService {

  public url = "https://localhost:44311/";
 
  constructor(private http: HttpClient) {
  }

  public composeHeaders() {
    const tokem = localStorage.getItem('tokenPontuaae');
    const headeers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);

    return headeers;

  }

  createAutomation(data: any) {
    // tslint:disable-next-line: radix
    const id = parseInt(Security.getUser().idEmpresa);
    data.IdEmpresa = id;
    return this.http.post(`${this.url}v1/Automacao`, data, { headers: this.composeHeaders() });
  }

  updateAutomation(data: any) {
    const id = parseInt(Security.getUser().idEmpresa);
    data.IdEmpresa = id;
    return this.http.put(`${this.url}/Automacao`, data, { headers: this.composeHeaders() });
  }

    
  deleteAutomation(id: number){
    const idEmpresa = parseInt(Security.getUser().idEmpresa);   
    return this.http.delete(`${this.url}v1/Automacao/${id}/${idEmpresa}`, {headers: this.composeHeaders()})
  }



  getListAutomation( idEmpresa: number) {
    return this.http.get<Automation[]>(`${this.url}/Automacao/${idEmpresa}`, { headers: this.composeHeaders() });
  }

  // lista, apura se vai precisa de dois parametros para fazer get
  getByIdAutomation(id: number, idEmpresa: number) {
    return this.http.get<Automation[]>(`${this.url}/Automacao/${id}/${idEmpresa}`, { headers: this.composeHeaders() });
  }

}
