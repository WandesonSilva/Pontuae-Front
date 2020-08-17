import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Security } from '../utils/security.util';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { rescueModels } from '../models/rescue.models';
import { PreRegisterModels } from '../models/preRegister.models';

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

    async pointPost(data: PreRegisterModels) {
        return this.http.post(`${environment.UrlLocal}/v1/ponto/v1/preregistro-pontuar`, data);

     }

    //rescue(data: rescueModels) {   
        //console.log(data); 
        //return this.http.put(`${environment.UrlBase}/v1/ponto/v1/resgatarPontos`, data, { headers: this.composeHeaders() });
    //}
}
