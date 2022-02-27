import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CountriesModel } from './Contries.model';

@Injectable({
    providedIn:'root'
})
export class apiService{
    private env = environment.envAdress
    private env1 = environment.envAdress1
    constructor(private http: HttpClient){}

    getAll():Observable<CountriesModel[]>{
        return this.http.get<CountriesModel[]>(this.env);
    }

    findByName(name:any):Observable<CountriesModel[]>{
        return this.http.get<CountriesModel[]>(`${this.env1}/${name}`)
    }
}