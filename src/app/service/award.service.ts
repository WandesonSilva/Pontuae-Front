import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Security } from '../Utils/Security-util';
import { Award } from '../models/award.models';


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

  getListAward(Id: number) {
    return this.http.get<Award[]>(`${this.url}v1/premio/${Id}`, { headers: this.composeHeaders()});
  }

  getByIdAward(idUser: number) {
    return this.http.get<Award[]>(`${this.url}/Pontos/${idUser}`, { headers: this.composeHeaders() });
  }

}
