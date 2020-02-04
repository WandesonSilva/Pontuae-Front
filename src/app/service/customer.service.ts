import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Security } from '../utils/security.util';
import { Empresa } from '../models/company.models';
import { tap } from 'rxjs/operators';
import { ListaEmpresaSaldo } from '../models/listarEmpresaSaldo';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Customer } from '../models/customer.model';


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

  getProfileCustomer(id: string) {
    return this.http.get<Customer[]>(`${environment.UrlBase}v1/Cliente/${id}`);
  
  }
  
  GetPremios() {
    return this.http.get<any[]>(this.url);
  }

  cadastrarCliente(data) {
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

  GetBalanceOfCompany(id: string){
    return this.http.get<Observable<Empresa>[]>(`${this.url}v1/Cliente/ListaSaldo/${id}`, { headers: this.composeHeaders() })
    .pipe(
        tap(console.log)
    );
  }

  UpdateProfileCustomer(data: any) {
    return this.http.put(`${environment.UrlBase}v1/Cliente/put`, data);
  }
}
