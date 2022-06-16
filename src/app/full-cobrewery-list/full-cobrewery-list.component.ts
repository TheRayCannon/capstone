import { Component, OnInit } from '@angular/core';
import { BreweryService } from '../brewery.service';
import { CoBrewery } from '../models/Brewery';


@Component({
  selector: 'app-full-cobrewery-list',
  templateUrl: './full-cobrewery-list.component.html',
  styleUrls: ['./full-cobrewery-list.component.css']
})
export class FullCOBreweryListComponent implements OnInit {
  coBrews: CoBrewery[] =[]

  constructor(private breweryService: BreweryService) {}

  ngOnInit(): void {
    this.breweryService.fetchColoradoBrews().subscribe(response =>

      this.coBrews = response

    )


  }

}
