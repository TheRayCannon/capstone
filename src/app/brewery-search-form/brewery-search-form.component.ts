import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brewery-search-form',
  templateUrl: './brewery-search-form.component.html',
  styleUrls: ['./brewery-search-form.component.css']
})
export class BrewerySearchFormComponent  {
  constructor(private router: Router){}
   searchBreweries({searchName}: {searchName: string;}){
    this.router.navigate(["/results"], {queryParams: {search : searchName}})
  }
}
