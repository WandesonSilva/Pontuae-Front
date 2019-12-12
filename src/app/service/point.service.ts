import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Security } from '../Utils/Security-util';
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

    Pontuar(data: any) {
        const id = parseInt(Security.getUser().id, data.id);
        data.IdUsuario = id;
        return this.http.post(`${this.url}v1/Pontos`, data, { headers: this.composeHeaders() });

    }

    ResgatarPontos(data: any) {

        return this.http.post(`${this.url}v1/ResgatarPontos`, data, { headers: this.composeHeaders() });

    }

    BuscarPremios() {

        const b = parseInt(Security.getUser().id, this.id);
        const a = this.http.get<Premios[]>(`${this.url}v1/Premios/${b}`).pipe(
            tap(console.log)
        );
        console.log(a);
        return a;


    }
}
