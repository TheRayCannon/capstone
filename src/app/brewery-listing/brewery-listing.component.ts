import { Component } from '@angular/core';
import { BreweryListingItemsComponent } from '../brewery-listing-items/brewery-listing-items.component';
import { Brewery } from '../models/Brewery';
import { BreweryService } from '../brewery.service';


@Component({
  selector: 'app-brewery-listing',
  templateUrl: './brewery-listing.component.html',
  styleUrls: ['./brewery-listing.component.css']
})
export class BreweryListingComponent  {


  breweries: Brewery[]= []

  constructor(private breweryService: BreweryService) {
  }
  ngOnInit(): void {
      this.breweryService.fetchBreweries().subscribe(response => {
        this.breweries = response.breweries
  })
  }
  addBrewery(newBrewery: Brewery){
    this.breweryService.addBreweries(newBrewery).subscribe(response => {
      this.breweries = [ response.breweries, ...this.breweries]
    })
    console.log(newBrewery)
  }
}
