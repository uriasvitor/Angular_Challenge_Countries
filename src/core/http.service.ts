import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CountriesModel } from './Contries.model';
import { names } from './names.model';


@Injectable({
    providedIn:'root'
})
export class apiService{

    private env = environment.envAdress
    constructor(private http: HttpClient){}

    getAll():Observable<CountriesModel[]>{
        return this.http.get<CountriesModel[]>(this.env);
    }

}