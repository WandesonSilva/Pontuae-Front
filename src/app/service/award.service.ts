import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Security } from '../utils/security.util';
import { Award } from '../models/award.models';
import { environment } from 'src/environments/environment';
import { ListAwardClient } from '../models/ListAwardClient';


@Injectable({ providedIn: 'root' })

export class AwardService {
  award: Award[];

  public url = '';

  constructor(private http: HttpClient) { }
  public composeHeaders() {
    const tokem = localStorage.getItem('tokenPontuaae');
    const headers = new HttpHeaders().set('autorization', 'token');

    return headers;

  }

  createAward(data: Award) {
    return this.http.post(`${environment.UrlBase}v1/Premios`, data);
  }

  updateAward(data: any) { 
    return this.http.put(`${this.url}v1/premio`, data, {headers: this.composeHeaders()});
  }

  getListAward(id: any) {
  
    return this.http.get<any[]>(`${environment.UrlBase}v1/Premios/${id}`);
  }

  getListAwardClient(idEmpresa: string, contato: string) {
    return this.http.get<ListAwardClient[]>(`${this.url}v1/premio/${idEmpresa}/${contato}`, { headers: this.composeHeaders()});
  }


  getByIdAward(userId: number, id: string) {
    return this.http.get<Award[]>(`${this.url}v1/premio/${userId}/empresa/${id}`, { headers: this.composeHeaders() });
  }
  
  deleteAward(IdEmpresa: number, IdPremio: number){
    return this.http.delete(`${environment.UrlBase}v1/deletePremio/${IdPremio}/${IdEmpresa}`, {headers: this.composeHeaders()})
  }

  rescue(data: any) {
    const id = parseInt(Security.getUser().idEmpresa);
    data.IdEmpresa = id;
    return this.http.put(`${this.url}/Pontos`, data, { headers: this.composeHeaders() });
  }
  

}
