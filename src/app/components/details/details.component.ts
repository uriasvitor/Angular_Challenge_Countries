import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CountriesModel } from 'src/core/Contries.model';
import { apiService } from 'src/core/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  currentList?:CountriesModel[];
  gettingName:any;
  constructor(private service:apiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any)=>{
      this.gettingName = params.name;
      this.getByName(this.gettingName);
    })
  }

  public getByName(name:any):void{
    this.service.findByName(name).subscribe(data=>{
      this.currentList = data;
      console.log(data);
    },
    error =>{
      console.log(error);
    })
  }
}
