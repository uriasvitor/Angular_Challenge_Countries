import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesModel } from './Contries.model';


export const Api = 'https://restcountries.com/v2/all'

@Injectable({
    providedIn:'root'
})
export class apiService{
    constructor(private http: HttpClient){}

    getAll():Observable<CountriesModel[]>{
        return this.http.get<CountriesModel[]>(Api);
    }
}