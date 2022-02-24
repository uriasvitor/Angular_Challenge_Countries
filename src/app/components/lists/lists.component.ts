import { Component, OnInit } from '@angular/core';
import { CountriesModel } from 'src/core/Contries.model';
import { apiService } from 'src/core/http.service';
import { names } from 'src/core/names.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  listCountries?:CountriesModel[];
  currentList?:CountriesModel;
  currentIndex = -1;

  public list:boolean = true
  constructor(private service:apiService) { }

  getList(){
    this.service.getAll().subscribe(data=>{
      this.listCountries = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
    this.getList();
  }

  public getActual(list:CountriesModel,index:number){
    this.currentList = list;
    this.currentIndex = index;
    console.log(this.currentIndex);
    console.log(this.currentList);
    this.list = false;
  }

}
