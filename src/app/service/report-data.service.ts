import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Security } from '../utils/security.util';

@Injectable({ providedIn: 'root' })
export class ReportDataService {

  constructor(private http: HttpClient) { }

  public composeHeaders() {
    const token = localStorage.getItem('tokenPontuaae');
    const headers = new HttpHeaders().set('autorization', 'token');
    return headers;

  }
  //ok
  GetRetained(idEmpresa: any) {

    return this.http.get<any>(`${environment.UrlBase}​/v1/cliente/v1/recorrentes/${idEmpresa}`, { headers: this.composeHeaders() });
  }

  //ok
  GetTotalCustomer(idEmpresa: number) {
    return this.http.get<any>(`${environment.UrlBase}/v1/cliente/v1/totalclientes/${idEmpresa}`, { headers: this.composeHeaders() });
  }


  GetTicketMedium(idNegocio: number) {
    return this.http.get<any>(`${environment.UrlBase}/v1/receita/v1/ticketMedioMes/${idNegocio}​`, { headers: this.composeHeaders() });
  }

  GetGeneratedRecipe(idEmpresa: number) {

    return this.http.get<any>(`${environment.UrlBase}/v1/receita/v1/totalVendas/${idEmpresa}`, { headers: this.composeHeaders() });
  }


}
