import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Security } from '../utils/security.util';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root'})

export class PointService {

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
        return this.http.post(`${environment.UrlBase}v1/Pontos`, data);

    }
   
}
