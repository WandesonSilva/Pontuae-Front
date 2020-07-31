import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Security } from '../utils/security.util';
import { Award } from '../models/award.models';
import { environment } from 'src/environments/environment';
import { listAwardClient } from '../models/listAwardClient.models';
import { rescueModels } from '../models/rescue.models';
import { ObjectAward } from '../models/ObjectAward.models';
import { ListContact } from '../models/ListContact.models';


@Injectable({ providedIn: 'root' })

export class AwardService {
  award: Award[];

  public url = '';

  constructor(private http: HttpClient) { }
  public composeHeaders() {
    const token = localStorage.getItem('tokenPontuaae');
    const headers = new HttpHeaders().set('autorization', 'token');

    return headers;

  }


  
  createAward(data: Award) {
    return this.http.post(`${environment.UrlBase}/v1/Premio/v1/post`, data);
  }

  updateAward(data: any) { 
    return this.http.put(`${environment.UrlBase}/v1/Premio/v1/put`, data, {headers: this.composeHeaders()});
  }

  getListAward(idEmpresa: any) {
  
    return this.http.get<any[]>(`${environment.UrlBase}/v1/Premio/v1/lista/${idEmpresa}`);
  }

   //averiguar
  getListAwardClient(idEmpresa: number, contato: string) {
    return this.http.get<listAwardClient[]>(`${environment.UrlBase}/v1/Premio/v1/lista/${idEmpresa}/${contato}`, { headers: this.composeHeaders()});
  }


  getByIdAward(id: number, idEmpresa: number,) {
    return this.http.get<Award[]>(`${environment.UrlBase}/v1/Premio/v1/detalhe/${id}/${idEmpresa}`, { headers: this.composeHeaders() });
  }
  
  deleteAward( data : ObjectAward){
    return this.http.post(`${environment.UrlBase}/v1/Premio/v1/deletar`, data);
  }

  //este metodo não sera nesta classe
  rescue(data: rescueModels) {   
    console.log(data); 
    return this.http.put(`${environment.UrlBase}/v1/ponto/v1/resgatarPontos`, data);
  }


}
