import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Security } from '../utils/security.util';
import { Empresa } from '../models/company.models';
import { tap } from 'rxjs/operators';
import { ListaEmpresaSaldo } from '../models/listarEmpresaSaldo.models';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Customer } from '../models/customer.model';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }

  public composeHeaders() {
    const tokem = localStorage.getItem('tokenPontuaae');
    const headeers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);

    return headeers;

  }


  getProfileCustomer(id: number) {
    return this.http.get<Customer[]>(`${environment.UrlBase}v1/Cliente/${id}`);
  
  }

  cadastrarCliente(data) {
    return this.http.post(`${environment.UrlBase}v1/NovoCliente`, data);
  }

  ListarProgramasFidelidadeCadastrados() {

    const id = Security.getUser().idCliente;
    const a = this.http.get<ListaEmpresaSaldo[]>(`${environment.UrlBase}v1/SaldosCliente/${id}`).pipe(
      tap(console.log)
    );
    return a;
  }

  GetListCustomer(id: number) {
    return this.http.get<any[]>(`${environment.UrlBase}v1/ListaClientes/${id}`, { headers: this.composeHeaders() });
  }

  GetByIdCustomer(id: number) {
    return this.http.get<any[]>(`${environment.UrlBase}v1/Cliente/${id}`, { headers: this.composeHeaders() });
  }

  GetHistoric(id: number) {
    return this.http.get<any[]>(`${environment.UrlBase}v1/ClientHistory/${id}`, { headers: this.composeHeaders() });
  }

  GetBalanceOfCompany(id: string){
    return this.http.get<Observable<Empresa>[]>(`${environment.UrlBase}v1/Cliente/ListaSaldo/${id}`, { headers: this.composeHeaders() })
    .pipe(
        tap(console.log)
    );
  }

  UpdateProfileCustomer(data: any) {
    return this.http.put(`${environment.UrlBase}v1/Cliente/put`, data);
  }
}
