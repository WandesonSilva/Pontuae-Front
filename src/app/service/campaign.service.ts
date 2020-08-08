import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Security } from '../utils/security.util';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact.models';
import { ListCampaign } from '../models/listCampaign.models';

@Injectable({providedIn: 'root'})

export class CampaignService {
  constructor(private http: HttpClient) { }

  public composeHeaders() {
    const token = localStorage.getItem('pontuaae.token');
    const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
    return headers;
}

  createCampaign(data: any) {
    // tslint:disable-next-line: radix
    const id = Security.getUser().idEmpresa;
    data.idEmpresa = id;     
    
    // data.contatos = list;


    return this.http.post(`${environment.UrlBase}/v1/campanha/v1/post`, data);

  }
  
  //Este método não estamos utilizando agora
  updateCampaign(data: any) { 
    const id = Security.getUser().idEmpresa;
    data.IdEmpresa = id;
    return this.http.put(`${environment.UrlBase}/Campanha`, data, { headers: this.composeHeaders() });
  }

  //Este método não estamos utilizando nesse momento
  deleteCampaign(id: number){
    const idEmpresa = Security.getUser().idEmpresa;
    return this.http.delete(`${environment.UrlBase}v1/Campanha/${id}/${idEmpresa}`, {headers: this.composeHeaders()});
  }

  getListCampaign(idEmpresa: any ) {
  
    return this.http.get<ListCampaign[]>(`${environment.UrlBase}/v1/campanha/v1/lista/${idEmpresa}`);
  }
  
  // getListContactsFromSegmentation( idEmpresa: number, segmentacao: string) {
  //   return this.http.get<string[]>(`${environment.UrlBase}/v1/campanha/v1/contatos/${idEmpresa}/${segmentacao}`, { headers: this.composeHeaders() });
  // }

  getListContactsFromSegCustomization( id: number, idEmpresa: number) {
    return this.http.get<any[]>(`${environment.UrlBase}​/v1​/campanha​/v1​/contatos​/v1​/${id}​/${idEmpresa}`);
  }


  

  getByIdCampaign(id: number, idEmpresa: number) {
    return this.http.get<any>(`${environment.UrlBase}/v1/campanha/v1/relatorio/${id}/${idEmpresa}`, { headers: this.composeHeaders() });
  }

  getListReturnCustomerCampaign( id: number, idEmpresa: number){ 
    return this.http.get<any[]>(`${environment.UrlBase}/v1/campanha/v1/ListaRetornoContatos/${id}/${idEmpresa}`, { headers: this.composeHeaders() });
  }
  
//-----------------------------------------------------------NÃO ESTA FUCIONANDO 
  a(idEmpresa: number, segCustomizado : string) {  
  return this.http.get<Contact[]>(`${environment.UrlBase}/v1/campanha/v1/ListaContato/${idEmpresa}/${segCustomizado}`);
  }


  getCreditSMS(){
    const idEmpresa = Security.getUser().idEmpresa;
    return this.http.get<any>(`${environment.UrlBase}/v1/campanha/v1/creditoSMS/${idEmpresa}`, { headers: this.composeHeaders() });

  }

  //Averiguar este metodo
  removerCampaign( id: number, idEmpresa: number){
    return this.http.delete(`${environment.UrlBase}v1/Campanha/Agendada/${id}/${idEmpresa}`, {headers: this.composeHeaders()})
  }
  

}