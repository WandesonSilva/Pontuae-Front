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

    public url = 'https://localhost:44387';

    public composeHeaders() {
        const tokem = localStorage.getItem('tokenPontuaae');
        const headers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);
    
        return headers;
    
      }
    

    UpdatePerfil(data) {
        const id = Security.getUser();
        data.idEmpresa = id.idEmpresa;
        data.id = id.id;
        return this.http.put(`${environment.UrlBase}/v1/empresa/v1/put`, data, { headers: this.composeHeaders() });
    }
    
    GetPerfil(id: number) {
        return this.http.get<any>(`${environment.UrlBase}/v1/empresa/v1/detalhe/${id}`, { headers: this.composeHeaders() });
    }

    uploadImagem(data: any): Observable<any> {
        return this.http.post(`${environment.UrlBase}/v1/empresass/v1/imagem`, data);
    }

    listarEmpresas() {
        return this.http.get<Empresa[]>(`${environment.UrlBase}/v1/empresa/v1/lista`, { headers: this.composeHeaders() })
            .pipe(
                tap(console.log)
            );
    }

    //Averiguar Remove este metodo  verifica se este metodo esta em pointService
    preRegister(data: any) {
        return this.http.post(`${environment.UrlBase}/v1/Cliente/PreCadastro`, data);
    }
}

