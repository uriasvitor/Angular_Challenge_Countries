import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CountriesModel } from 'src/core/Contries.model';
import { liveSearch } from 'src/core/des.model';
import { apiService } from 'src/core/http.service';
import { names } from 'src/core/names.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],

})
export class ListsComponent implements OnInit {
  getCountrie?:CountriesModel[];
  listCountries?:CountriesModel[];
  currentList?:CountriesModel;
  currentIndex = -1;
  countrieName = '';
  noSearching:Boolean = true;
  findNameOr:Boolean = true;
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

  public findName = this.subjectSearch.pipe(
    liveSearch(name => this.service.findByName(name))
  )

  ngOnInit(): void {
    this.getList();
  }

  public getAtual(list:CountriesModel,index:number){
    this.currentList = list;
    this.currentIndex = index;
    this.list = false;
  }

  public searchName(name:string){
    if(name ==''){
      this.noSearching = true;
      this.findNameOr = false
    }else{
      this.noSearching = false;
      this.findNameOr = true;
    }
    this.subjectSearch.next(name);
  }
}
