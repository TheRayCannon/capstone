import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryListingComponent } from './brewery-listing/brewery-listing.component';
import { BrewsIndexComponent } from './brews-index/brews-index.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [{
  path: "",
  component: BrewsIndexComponent,
},{
  path: "results",
  component: SearchResultsComponent,

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
