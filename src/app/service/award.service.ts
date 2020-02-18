import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Security } from '../utils/security.util';
import { Award } from '../models/award.models';
import { environment } from 'src/environments/environment';
import { listAwardClient } from '../models/listAwardClient';


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
    return this.http.put(`${environment.UrlBase}v1/premio`, data, {headers: this.composeHeaders()});
  }

  getListAward(id: any) {
  
    return this.http.get<any[]>(`${environment.UrlBase}v1/Premios/${id}`);
  }

  getListAwardClient(Id: number, contato: string) {
    return this.http.get<listAwardClient[]>(`${environment.UrlBase}v1/premio/${Id}/${contato}`, { headers: this.composeHeaders()});
  }


  getByIdAward(idUsuario: string, id: string) {
    return this.http.get<Award[]>(`${environment.UrlBase}v1/premio/${idUsuario}/empresa/${id}`, { headers: this.composeHeaders() });
  }
  
  deleteAward(IdEmpresa: number, IdPremio: number){
    return this.http.delete(`${environment.UrlBase}v1/deletePremio/${IdPremio}/${IdEmpresa}`, {headers: this.composeHeaders()})
  }

  rescue(data: any) {
    const user = Security.getUser();
    data.IdEmpresa = user.idEmpresa;
    data.IdEmpresa = user.idUsuario;
    return this.http.put(`${environment.UrlBase}/Pontos`, data, { headers: this.composeHeaders() });
  }
  

}
