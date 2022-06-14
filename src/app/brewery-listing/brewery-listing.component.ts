import { Component, Input } from '@angular/core';

import { Brewery } from '../models/Brewery';


@Component({
  selector: 'app-brewery-listing',
  templateUrl: './brewery-listing.component.html',
  styleUrls: ['./brewery-listing.component.css']
})
export class BreweryListingComponent  {
 @Input() breweries: Brewery[]= []
  addBrewery(newBrewery: Brewery){
    }
  }

