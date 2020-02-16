import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Security } from '../utils/security.util';
import { Award } from '../models/award.models';
import { ListAwardClient } from '../models/ListAwardClient';


@Injectable({ providedIn: 'root' })

export class AwardService {
  award: Award[];

  public url = '';

  constructor(private http: HttpClient) { }

  public composeHeaders() {
    const token = localStorage.getItem('petshop.token');
    const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
    return headers;
  }

  createAward(data: any) {
    const id = parseInt(Security.getUser().id, data.id);
    data.IdUsuario = id;
    return this.http.post(`${this.url}v1/premio`, data, {headers: this.composeHeaders()});
  }

  updateAward(data: any) { 
    return this.http.put(`${this.url}v1/premio`, data, {headers: this.composeHeaders()});
  }

  getListAward(userId: string) {
    return this.http.get<Award[]>(`${this.url}v1/premio/${userId}`, { headers: this.composeHeaders()});
  }

  getListAwardClient(idEmpresa: string, contato: string) {
    return this.http.get<ListAwardClient[]>(`${this.url}v1/premio/${idEmpresa}/${contato}`, { headers: this.composeHeaders()});
  }


  getByIdAward(userId: string, id: string) {
    return this.http.get<Award[]>(`${this.url}v1/premio/${userId}/empresa/${id}`, { headers: this.composeHeaders() });
  }
  
  deleteAward(id: string){
    return this.http.delete(`${this.url}v1/premio/${id}`, {headers: this.composeHeaders()})
  }

  rescue(data: any) {
    const id = parseInt(Security.getUser().idEmpresa);
    data.IdEmpresa = id;
    return this.http.put(`${this.url}/Pontos`, data, { headers: this.composeHeaders() });
  }
  

}
