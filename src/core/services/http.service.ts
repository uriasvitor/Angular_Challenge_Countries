import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CountriesModel } from '../models/Contries.model';

@Injectable({
    providedIn:'root'
})
export class apiService{
    private env = environment.envAdress
    private env1 = environment.envAdress1
    private env2 = environment.envAdress2
    constructor(private http: HttpClient){}

    getAll():Observable<CountriesModel[]>{
        return this.http.get<CountriesModel[]>(this.env);
    }

    findByName(name:any):Observable<CountriesModel[]>{
        return this.http.get<CountriesModel[]>(`${this.env1}/${name}`)
    }
    findByRegion(nameR:any):Observable<CountriesModel[]>{
        return this.http.get<CountriesModel[]>(`${this.env2}/${nameR}`)
    }
    get(id: any): Observable<CountriesModel> {
        return this.http.get<any>(`${this.env1}/${id}`);
      }
}