import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Security } from '../utils/security.util';
import { Premios } from '../models/premios.models';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})

export class PointService {

    public url = 'https://localhost:44311/';
    public id: number;
    constructor(
        private http: HttpClient
    ) { }

    public composeHeaders() {
        const tokem = localStorage.getItem('tokenPontuaae');
        const headeers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);

        return headeers;

    }

    pointPost(data: any) {
        const id = parseInt(Security.getUser().id, data.id);
        data.IdUsuario = id;
        return this.http.post(`${this.url}v1/Pontos`, data, { headers: this.composeHeaders() });

    }

  

   
}
