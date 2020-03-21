import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';
import { Security } from '../utils/security.util';

@Injectable({providedIn: 'root'})

export class UserEmployeeService {
  public url = "https://localhost:44311/";

  constructor(private http: HttpClient) {
  }

  public composeHeaders() {
    const tokem = localStorage.getItem('tokenPontuaae');
    const headers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);

    return headers;
  }
  createUserEmployee(data: any) {
    // tslint:disable-next-line: radix
    const id = Security.getUser().idEmpresa;
    data.IdEmpresa = id;
    return this.http.post(`${environment.UrlBase}v1/Funcionario`, data, { headers: this.composeHeaders() });

  }

  updateUserEmployee(data: any) {
    const id = Security.getUser().idEmpresa;
    data.IdEmpresa = id;
    return this.http.put(`${environment.UrlBase}v1/Funcionario/Editar`, data, { headers: this.composeHeaders() });
  }

  getListUserEmployee( idEmpresa: number) {
    return this.http.get<Employee[]>(`${environment.UrlBase}v1/Funcionario/${idEmpresa}`, {headers: this.composeHeaders() });
  }

  deleteEmployee(id: number, idEmpresa: number){
    return this.http.delete(`${environment.UrlBase}v1/Funcionario/${id}/${idEmpresa}`, {headers: this.composeHeaders()})
  }

  getByIdEmployee(id: number, idEmpresa: number) {
    return this.http.get<Employee[]>(`${environment.UrlBase}v1/Funcionario/${id}/${idEmpresa}`, { headers: this.composeHeaders() });
  }
}