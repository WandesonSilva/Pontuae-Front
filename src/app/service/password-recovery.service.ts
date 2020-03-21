import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PasswordRecoveryService {

  constructor(private http: HttpClient) { }

  public composeHeaders() {
    const tokem = localStorage.getItem('tokenPontuaae');
    const headers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);

    return headers;

  }
    updatePassword(password: string, id: number) {
    return this.http.put(`${environment.UrlBase}v1/Usuario/${password}/${id}`, { headers: this.composeHeaders() });
}


}