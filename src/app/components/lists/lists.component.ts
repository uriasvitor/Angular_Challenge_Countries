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
  name?:any;

  getList(){
    this.service.getAll().subscribe(data=>{
      this.listCountries = data;
      console.log(data);
    })
  }

  constructor(private service:apiService) { }

  ngOnInit(): void {
    this.getList();
  }

}
