import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GraphicService {
  public url = 'https://localhost:44311/';
  constructor(private http: HttpClient) { }

  public composeHeaders() {
    const tokem = localStorage.getItem('tokenPontuaae');
    const headeers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);

    return headeers;
  }

  getDataPeakDayWeek(data: any){
    return this.http.get<any[]>(`${this.url}v1/PeakDayWeek/${data.id}`, { headers: this.composeHeaders() });
  }
}
