import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CountriesModel } from 'src/core/Contries.model';
import { apiService } from 'src/core/http.service';
import { names } from 'src/core/names.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],

})
export class ListsComponent implements OnInit {
  listCountries?:CountriesModel[];
  currentList?:CountriesModel;
  currentIndex = -1;
  countrieName = '';

  public search?: Observable<CountriesModel[]>

  private subjectSearch: Subject<string> = new Subject<string>()

  public list:boolean = true
  constructor(private service:apiService) { }

  getList(){
    this.service.getAll().subscribe(data=>{
      this.listCountries = data;
      console.log(data);
    } )
  }

  ngOnInit(): void {
    this.search = this.searchCountry
    this.getList();
  }

  public getAtual(list:CountriesModel,index:number){
    this.currentList = list;
    this.currentIndex = index;
    this.list = false;
  }
  public searchCountry(){
    this.service.findByName(this.countrieName).subscribe(
      data => {
        this.listCountries = data;
        console.log(data);
      }
    )
  }
}
