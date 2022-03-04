import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { CountriesModel } from 'src/core/Contries.model';
import { liveSearch } from 'src/core/des.model';
import { apiService } from 'src/core/http.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
  providers:[apiService]

})
@Injectable({
  providedIn:'root'
})
export class ListsComponent implements OnInit {
  listCountries?:CountriesModel[];
  regionsList?:CountriesModel[];
  currentList?:CountriesModel;
  currentIndex = -1;
  countrieName = '';
  noSearching:Boolean = true;
  findNameOr:Boolean = true;
  response:Boolean = true

  public search?: Observable<CountriesModel[]>

  private subjectSearch: Subject<string> = new Subject<string>()

  public list:boolean = true
  constructor(private service:apiService,private route:Router) { }

  public regions = [
    {id:0,name:""},
    {id:1,name:"Filter By Region"},
    {id:2,name:"Africa"},
    {id:3,name:"Americas"},
    {id:4,name:"Asia"},
    {id:5,name:"Europe"},
    {id:6,name:"Oceania"},  
  ];
  selected:number = 1;

  selectChange(id:any){
    if(this.selected != 1){
      this.findByRegions()
    }else{
      this.getList()
    }
  }
  
  public findByRegions(){
    if(this.selected != 0){
      this.service.findByRegion(this.regions[this.selected].name).subscribe(data =>{
      this.regionsList = data
    },
    error =>  {
      console.log(error)
      this.response = false;
      })
    }
  }

  getList(){
    this.service.getAll().subscribe(data=>{
      this.regionsList = data;
    },
    error =>{
      console.log(error)
      this.response = false;
    })
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
    this.route.navigate(['home/lists/details'],{queryParams:{
      name:this.currentList.name}})
  }

  public searchName(name:string){
    if(name == ''){
      this.noSearching = true;
      this.findNameOr = false
    }else{
      this.noSearching = false;
      this.findNameOr = true;
    }
    this.subjectSearch.next(name);
  }

}
