import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreweryService } from '../brewery.service';
import { Brewery } from '../models/Brewery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchName = ""
  results: Brewery[] = []

  constructor(private route: ActivatedRoute, private breweryService: BreweryService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchName = decodeURIComponent(params["search"])
      this.breweryService.search(this.searchName).subscribe(response => {
        this.results = response.breweries
      })
    }
    )
  }

}
