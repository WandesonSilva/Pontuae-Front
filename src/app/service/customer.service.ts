import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Security } from '../Utils/Security-util';
import { Empresa } from '../models/company.models';
import { tap } from 'rxjs/operators';
import { ListaEmpresaSaldo } from '../models/listarEmpresaSaldo';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public url = 'https://localhost:44311/';
  public id: number;
  constructor(private http: HttpClient) { }

  public composeHeaders() {
    const tokem = localStorage.getItem('tokenPontuaae');
    const headeers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);

    return headeers;
  }

  GetPremios() {
    return this.http.get<any[]>(this.url);
  }

  cadastrarCliente(data: any) {
    console.log(data);
    return this.http.post(`${this.url}v1/NovoCliente`, data);
  }

  ListarProgramasFidelidadeCadastrados() {

    const b = parseInt(Security.getUser().id, this.id);
    const a = this.http.get<ListaEmpresaSaldo[]>(`${this.url}v1/SaldosCliente/${b}`).pipe(
      tap(console.log)
    );
    console.log(b);
    console.log(a);
    return a;
  }

  GetListCustomer(id: number) {
    return this.http.get<any[]>(`${this.url}v1/ListaClientes/${id}`, { headers: this.composeHeaders() });
  } 

  GetByIdCustomer(id: number) {
    return this.http.get<any[]>(`${this.url}v1/Cliente/${id}`, { headers: this.composeHeaders() });
  }

  GetHistoric(id: number) {
    return this.http.get<any[]>(`${this.url}v1/ClientHistory/${id}`, { headers: this.composeHeaders() });
  }
}
