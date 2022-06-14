import { Component, OnInit } from '@angular/core';
import { BreweryService } from '../brewery.service';
import { Brewery } from '../models/Brewery';

@Component({
  selector: 'app-brews-index',
  templateUrl: './brews-index.component.html',
  styleUrls: ['./brews-index.component.css']
})
export class BrewsIndexComponent implements OnInit {
  breweries: Brewery[]= []

  constructor(private breweryService: BreweryService) {
  }
  ngOnInit(): void {
      this.breweryService.fetchBreweries().subscribe(Response => {
        this.breweries = Response.breweries
  })
  }


}


