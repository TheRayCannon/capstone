import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryComponent } from './brewery/brewery.component';
import { BrewsIndexComponent } from './brews-index/brews-index.component';
import { FullCOBreweryListComponent } from './full-cobrewery-list/full-cobrewery-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [{
  path: "",
  component: BrewsIndexComponent,
},{
  path: "results",
  component: SearchResultsComponent,

},{
  path: "Other",
  component: FullCOBreweryListComponent,
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
