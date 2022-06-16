import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreweryService } from '../brewery.service';
import { Brewery } from '../models/Brewery';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.css']
})
export class BreweryComponent implements OnInit {

  edit: boolean = false;
  brewery: any;
  breweries!: Brewery[];
  id: string = "";
  name: string = "";
  description: string = "";
  address: string = "";
  ipaOption: string = "";
  sourOption: string = "";
  stoutOption: string = "";
  amenityOne: string = "";
  amenityTwo: string = " ";
  amenityThree: string ="";
  router: Router;

  constructor(private breweryService: BreweryService, private route: ActivatedRoute, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id") || ""

    this.breweryService.fetchBreweries().subscribe(response => {
      this.breweries = response.breweries;
      this.brewery = this.breweries.find(brewery => brewery.id === +this.id)
      if (this.brewery === undefined) {
        this.router.navigate(['/404'])
      }
    })

  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  editBrewery() {
    this.breweryService.editBrewery(this.brewery)
    this.toggleEdit()
  }

  onDelete() {
    this.breweryService.deleteBrewery(+this.id);
    this.router.navigate(['/']).then(() => {window.location.reload()})
}
}

