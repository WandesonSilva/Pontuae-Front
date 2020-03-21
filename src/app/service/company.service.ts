import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Empresa } from '../models/company.models';
import { catchError, tap, map } from 'rxjs/operators';
import { Security } from '../utils/security.util';
import { Customer } from '../models/customer.model';
import { PreRegisterModels } from '../models/preRegister.models';
import { environment } from 'src/environments/environment';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class DataService {
    constructor(private http: HttpClient) { }

    public url = 'https://localhost:44311/';

    public composeHeaders() {
        const tokem = localStorage.getItem('tokenPontuaae');
        const headeers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);
    
        return headeers;
    
      }
    
    CriarPerfil(data) {
        data.Id = Security.getUser().idEmpresa;
        return this.http.post(`${environment.UrlBase}v1/PerfilEmpresa`, data);
    }

    GetPerfil(id: number) {
        return this.http.get<any[]>(`${environment.UrlBase}v1/Empresa/${id}`, { headers: this.composeHeaders() });
    }

    UpdatePerfil(data) {
        return this.http.put(`${environment.UrlBase}v1/Empresa/edit`, data, { headers: this.composeHeaders() });
    }

    uploadImagem(data: any): Observable<any> {
        return this.http.post(`${environment.UrlBase}v1/empresa/imagem`, data);
    }

    listarEmpresas() {
        return this.http.get<Empresa[]>(`${environment.UrlBase}v1/Empresa/Lista`, { headers: this.composeHeaders() })
            .pipe(
                tap(console.log)
            );
    }

    preRegister(data: any) {
        return this.http.post(`${environment.UrlBase}/v1/Cliente/PreCadastro`, data);
    }
}

