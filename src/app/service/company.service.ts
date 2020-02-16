import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Empresa } from '../models/company.models';
import { catchError, tap, map } from 'rxjs/operators';
import { Security } from '../utils/security.util';
import { Customer } from '../models/customer.model';
import { PreRegisterModels } from '../models/preRegister.models';


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
        data.Id = Security.getUser().id;
        console.log(data);
        return this.http.post(`${this.url}v1/PerfilEmpresa`, data);

    }

    GetPerfil(id: number) {
        console.log(id);
        return this.http.get<any[]>(`${this.url}v1/Empresa/${id}`, { headers: this.composeHeaders() });
    }

    UpdatePerfil(data) {
        return this.http.put(`${this.url}v1/Empresa/edit`, data, { headers: this.composeHeaders() });
    }

    uploadImagem(data: any): Observable<any> {
        return this.http.post(`${this.url}v1/empresa/imagem`, data);
    }

    listarEmpresas() {
        return this.http.get<Empresa[]>(`${this.url}v1/Empresa/Lista`, { headers: this.composeHeaders() })
            .pipe(
                tap(console.log)
            );
    }

    preRegister(data: any) {
        return this.http.post(`${this.url}/v1/Cliente/PreCadastro`, data);
    }
}

