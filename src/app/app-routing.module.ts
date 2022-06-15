import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryListingComponent } from './brewery-listing/brewery-listing.component';
import { BreweryComponent } from './brewery/brewery.component';
import { BrewsIndexComponent } from './brews-index/brews-index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [{
  path: "",
  component: BrewsIndexComponent,
},{
  path: "results",
  component: SearchResultsComponent,

},{
  path: "breweries/:id",
  component: BreweryComponent,
},{
 path: '**',
 component: PageNotFoundComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
