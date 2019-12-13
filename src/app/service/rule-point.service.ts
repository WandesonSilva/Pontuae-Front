import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Security } from '../utils/security.util';
import { Point } from '../models/points.models';
import { RuleProgram } from '../models/ruleProgram';


@Injectable({ providedIn: 'root' })

export class RulePointService {

  public url = "https://localhost:44311/";

  constructor(private http: HttpClient) {
  }

  public composeHeaders() {
    const tokem = localStorage.getItem('tokenPontuaae');
    const headeers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);

    return headeers;

  }

  createRule(data: any) {
    // tslint:disable-next-line: radix
    const id = parseInt(Security.getUser().id);
    data.IdUsuario = id;
    return this.http.post(`${this.url}v1/Pontos`, data, { headers: this.composeHeaders() });

  }

  getListProgramLoyalty(id: number) {
    return this.http.get<Point[]>(`${this.url}/Pontos/${id}`, { headers: this.composeHeaders() });
  }

  // lista, apura se vai precisa de dois parametros para fazer get
  getByIdProgramLoyalty(idUser: number) {
    return this.http.get<Point[]>(`${this.url}/Pontos/${idUser}`, { headers: this.composeHeaders() });
  }




  updateProgramLoyalty(data: any) {
    return this.http.put(`${this.url}/Pontos`, data, { headers: this.composeHeaders() });
  }

}
