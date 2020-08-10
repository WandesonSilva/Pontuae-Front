import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';
import { Security } from '../utils/security.util';
import { Observable } from 'rxjs';
import { ObjectEmployee } from '../models/ObjectEmployee';

@Injectable({providedIn: 'root'})

export class UserEmployeeService {
 
  constructor(private http: HttpClient) {
  }

  public composeHeaders() {
    const tokem = localStorage.getItem('tokenPontuaae');
    const headers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);

    return headers;


  }
  createUserEmployee(data:Employee):Observable<any>{
 
     return this.http.post(`${environment.UrlBase}/v1/funcionario/v1/post`, data);
     

  }

  updateUserEmployee(data: Employee) {
    return this.http.put(`${environment.UrlBase}/v1/funcionario/v1/updateFuncionario`, data);
  }

  getListUserEmployee( idEmpresa: number) {
    return this.http.get<any[]>(`${environment.UrlBase}/v1/funcionario/v1/lista/${idEmpresa}`, {headers: this.composeHeaders() });
  }

 async  deleteEmployee(dado: ObjectEmployee){
    return this.http.delete<ObjectEmployee>(`${environment.UrlBase}/v1/funcionario/v1/${dado.id}/${dado.idEmpresa}`, {headers: this.composeHeaders() });
  }

  async getByIdEmployee(id: number, idEmpresa: number) {
    return this.http.get<any>(`${environment.UrlBase}/v1/funcionario/v1/detalhe/${id}/${idEmpresa}`, { headers: this.composeHeaders() });
  }
} 