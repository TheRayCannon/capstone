import { Component, OnInit } from '@angular/core';
import { BreweryService } from '../brewery.service';
import { Brewery } from '../models/Brewery';

@Component({
  selector: 'app-brewery-listing-items',
  templateUrl: './brewery-listing-items.component.html',
  styleUrls: ['./brewery-listing-items.component.css']
})
export class BreweryListingItemsComponent implements OnInit{
  breweries: Brewery[]= []

  constructor(private breweryService: BreweryService) {
  }
  ngOnInit(): void {
      this.breweryService.fetchBreweries().subscribe(Response => {
        this.breweries = Response.breweries
  })
  }
}
