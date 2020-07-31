import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Data } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraphicService {
  constructor(private http: HttpClient) { }

  public composeHeaders() {
    const tokem = localStorage.getItem('tokenPontuaae');
    const headers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);

    return headers;
  }

  getDataPeakDayWeek(data: any){
    return this.http.get<any[]>(`${environment.UrlBase}v1/PeakDayWeek/${data.id}`, { headers: this.composeHeaders() });
  }
}
