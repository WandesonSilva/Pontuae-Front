import { AppModule } from '../app.module';
import { Injectable, Inject } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Security } from '../utils/security.util';

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
//ok
    authenticate(data) {
        return this.http.post(`${environment.UrlBase}/v1/login/v1/Autenticacao`, data);
    }
//ok
    authenticateClient(data) {
        return this.http.post(`${environment.UrlBase}/v1/loginCliente/v1/Autenticacao`, data);
    }


  //averiguar se pode remover
    getRegister(data) {
        return this.http.post(`${environment.UrlBase}/v1/NewUsuario`, data);
    }

    UpdateToken() {
        return this.http.post(`${environment.UrlBase}/v1/atualizar-token`,
            null,
            { headers: this.composeHeaders() }
        );

    }

    CriarPerfilEmpresa(data) {
        return this.http.post(`${environment.UrlBase}/v1/empresa/v1/post`, data);
    }
 
    UpdateUsuario(data) {
        const user = Security.getUser();
        data.id = user.id;
        data.idEmpresa = user.idEmpresa;
        return this.http.put(`${environment.UrlBase}/v1/usuario/v1/putUsuario`, data);
    }
}
