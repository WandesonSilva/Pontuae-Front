import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public url = 'https://localhost:44311/';
  constructor(private http: HttpClient) { }

  public composeHeaders() {
    const tokem = localStorage.getItem('tokenPontuaae');
    const headers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);

    return headers;

}

getListModelMessage( idUser: number) {
  return this.http.get<Message[]>(`${this.url}/Mensagem/${idUser}`, { headers: this.composeHeaders() });
}
}