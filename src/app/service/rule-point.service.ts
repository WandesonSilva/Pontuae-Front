import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Security } from '../utils/security.util';
import { Point } from '../models/points.models';
import { RuleProgram } from '../models/ruleProgram.models';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConfigPoint } from '../models/configPoint.models';


@Injectable({ providedIn: 'root' })

export class RulePointService {

  constructor(private http: HttpClient) { }

  public composeHeaders() {
    const tokem = localStorage.getItem('tokenPontuaae');
    const headers = new HttpHeaders().set('autorization', 'token');

    return headers;

  }
//ok  
  createRule(data) {   
    return this.http.post(`${environment.UrlBase}/v1/ajuste/v1/post`, data);
  } 

//ok
  updateProgramLoyalty(data: ConfigPoint) { 
    const id = Security.getUser().idEmpresa;
    data.idEmpresa = id;
    return this.http.put(`${environment.UrlBase}/v1/ajuste/v1/put`, data, { headers: this.composeHeaders() });
  }

  //averigua se pode remover  NÃO ESTOU UTILIZANDO
  getListProgramLoyalty( id: number) {
    return this.http.get<RuleProgram[]>(`${environment.UrlBase}/Pontos/${id}`, { headers: this.composeHeaders() });
  }

//ok
  getByIdProgramLoyalty(idEmpresa: number) {
    return this.http.get<any[]>(`${environment.UrlBase}/v1/ajuste/v1/detalhe/${idEmpresa}`,  { headers: this.composeHeaders() });   
  }
  //averigua se pode remover
  deleteLoyalty(id: number){
    return this.http.delete(`${environment.UrlBase}v1/Pontos/${id}`, {headers: this.composeHeaders()});
  }

}
