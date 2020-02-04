import { AppModule } from '../app.module';
import { Injectable, Inject } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {



    constructor(private http: HttpClient) { }

    public composeHeaders() {
        const token = localStorage.getItem('tokenPontuaae');
        const headers = new HttpHeaders().set('autorization', 'token');
        return headers;

    }

    authenticate(data) {
        return this.http.post(`${environment.UrlBase}v1/login`, data);
    }

    authenticateClient(data) {
        return this.http.post(`${environment.UrlBase}v1/login`, data);
    }

    getRegister(data) {
        return this.http.post(`${environment.UrlBase}v1/NewUsuario`, data);
    }

    UpdateToken() {
        return this.http.post(`${environment.UrlBase}v1/atualizar-token`,
            null,
            { headers: this.composeHeaders() }
        );

    }

    createUser(data) {
        return this.http.post(`${environment.UrlBase}v1/NovoAdmin`, data);
    }

    UpdateUsuario(data) {
        return this.http.put(`${environment.UrlBase}v1/usuario/edit`, data);
    }
}
