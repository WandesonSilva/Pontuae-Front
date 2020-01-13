import { AppModule } from '../app.module';
import { Injectable, Inject } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class AuthenticationService {

     public url = 'https://localhost:44311/';

    constructor(private http: HttpClient) {}

    public composeHeaders() {
        const token = localStorage.getItem('tokenPontuaae');
        const headers = new HttpHeaders().set('autorization', 'token');
        return headers;

    }

    authenticate(data) {
        return this.http.post(`${this.url}v1/login`, data);
    }

    authenticateClient(data){
        return this.http.post(`${this.url}v1/loginCliente`, data);
    }

    getRegister(data){
        return this.http.post(`${this.url}v1/NewUsuario`,data);
    }

    UpdateToken(){
        return this.http.post(`${this.url}v1/atualizar-token`,
            null,
            { headers: this.composeHeaders() }
        );

    }

    createUser(data){
        return this.http.post(`${this.url}v1/NovoAdmin`,data);
    }
}
