import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportDataService {
  public url = 'https://localhost:44311/';
  constructor(private http: HttpClient) { }

  public composeHeaders() {
    const tokem = localStorage.getItem('tokenPontuaae');
    const headeers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);

    return headeers;

  }

   GetRetained(id: any) {
    return this.http.get<any[]>(`${this.url}v1/Cliente/totalRetidos/${id}`, { headers: this.composeHeaders() });
  }

  GetTotalCustomer(IdEmpresa: any) {
    return this.http.get<any[]>(`${this.url}/v1/Cliente/TotalClientes/${IdEmpresa}`);
  }

  GetRankList(IdEmpresa: any) {
    return this.http.get<any[]>(`${this.url}v1/Cliente/ListaRanking/${IdEmpresa}`, { headers: this.composeHeaders() });
  }

}
