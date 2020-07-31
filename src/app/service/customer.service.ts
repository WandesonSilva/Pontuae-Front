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
  
  cadastrarCliente(data) {
    return this.http.post(`${environment.UrlBase}/v1/cliente/v1/post`, data);
  }

  UpdateProfileCustomer(data: any) {
    return this.http.put(`${environment.UrlBase}/v1/cliente/v1/put`, data);
  }

  getProfileCustomer(idUsuario: number) {
    return this.http.get<Customer[]>(`${environment.UrlBase}/v1/cliente/v1/detalhe/${idUsuario}`);
  
  }

  //FAZER ALTERAÇÃO NESTE METODO, VOU PRECISA DO TELEFONE PARA PASSA COMO PARAMETRO
  ListarProgramasFidelidadeCadastrados() {
    const contato = Security.getUser().contato;
    const a = this.http.get<ListaEmpresaSaldo[]>(`${environment.UrlBase}​/v1​/cliente​/v1​/clienteSaldo​/${contato}`).pipe(
      tap(console.log)
    );
    return a;
  }

  //averiguar se estou usando este ou o RankList do classe  report-data
  GetListCustomer(idEmpresa: number) {
    return this.http.get<any[]>(`${environment.UrlBase}/v1/cliente/v1/lista/${idEmpresa}`, { headers: this.composeHeaders() });
  }

  //averiguar se pode remover este metodo, se não estive sendo utilizado
  GetByIdCustomer(idUsuario: number) {
    return this.http.get<any[]>(`${environment.UrlBase}/v1/cliente/v1/detalhe/${idUsuario}`, { headers: this.composeHeaders() });
  }
                       GetBalanceOfCompany(id: string){
    return this.http.get<Observable<Empresa>[]>(`${environment.UrlBase}v1/Cliente/ListaSaldo/${id}`, { headers: this.composeHeaders() })
    .pipe(  
        tap(console.log)  
    );
  }

  GetDetails(id: number){
    const idEmpresa = Security.getUser().idEmpresa;   
    return this.http.get<any>(`${environment.UrlBase}/v1/cliente/v1/detalhe/${id}/${idEmpresa}`, { headers: this.composeHeaders() });

  }

   //Não esta sendo utilizado 
  //  GetHistoric(id: number) {
  //   return this.http.get<any[]>(`${environment.UrlBase}v1/ClientHistory/${id}`, { headers: this.composeHeaders() });
  // }
  
}
