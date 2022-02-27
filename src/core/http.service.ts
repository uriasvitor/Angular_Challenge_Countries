import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CountriesModel } from './Contries.model';
import 'rxjs/add/operator/debounceTime';

@Injectable({
    providedIn:'root'
})
export class apiService{
    queryUrl:string = '?search=';
    private env = environment.envAdress
    constructor(private http: HttpClient){}

    getAll():Observable<CountriesModel[]>{
        return this.http.get<CountriesModel[]>(this.env);
    }

    findByName(name:any):Observable<CountriesModel[]>{
        return this.http.get<CountriesModel[]>(`${this.env}?title=${name}`)
    }
}