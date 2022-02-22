import { names } from "./names.model";

export class CountriesModel{
    name?:any;
    topLevelDomain?:string;
    alpha2Code?:string;
    alpha3Code?:string;
    callingCodes?:string;
    capital?:Array<any>;
    altSpellings?:string;
    region?:string;
    continent?:string;
    population?:number;
    latlng?:string;
    flags?:{
        png:string,
        svg:string
    };
}
