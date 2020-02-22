import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Security } from '../utils/security.util';
import { Campaign } from '../models/campaign';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})

export class CampaignService {
  public url = "https://localhost:44311/";

  constructor(private http: HttpClient) {
  }

  public composeHeaders() {
    const tokem = localStorage.getItem('tokenPontuaae');
    const headeers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);

    return headeers;

  }


  createCampaign(data: any) {
    // tslint:disable-next-line: radix
    const id = Security.getUser().idEmpresa;
    data.IdEmpresa = id;
    return this.http.post(`${environment.UrlBase}v1/Campanha`, data, { headers: this.composeHeaders() });

  }

  updateCampaign(data: any) {
    const id = Security.getUser().idEmpresa;
    data.IdEmpresa = id;
    return this.http.put(`${environment.UrlBase}/Campanha`, data, { headers: this.composeHeaders() });
  }

  deleteCampaign(id: number){
    const idEmpresa = Security.getUser().idEmpresa;
    return this.http.delete(`${environment.UrlBase}v1/Campanha/${id}/${idEmpresa}`, {headers: this.composeHeaders()})
  }

  getListCampaign( idEmpresa: number) {
    return this.http.get<Campaign[]>(`${environment.UrlBase}/Campanha/${idEmpresa}`, { headers: this.composeHeaders() });
  }
  
  getListContacts( idEmpresa: number, value: number) {
    return this.http.get<string[]>(`${environment.UrlBase}/Campanha/${idEmpresa}/${value}`, { headers: this.composeHeaders() });
  }

  // lista, apura se vai precisa de dois parametros para fazer get
  getByIdCampaign(id: number, idEmpresa: number) {
    return this.http.get<Campaign[]>(`${environment.UrlBase}/Campanha/${id}/${idEmpresa}`, { headers: this.composeHeaders() });
  }
  

}