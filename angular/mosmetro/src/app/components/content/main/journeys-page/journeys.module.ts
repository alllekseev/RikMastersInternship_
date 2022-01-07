import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {JourneysFiltrationComponent} from "./journeys-filtration/journeys-filtration.component";
import {JourneysPaginationComponent} from "./journeys-pagination/journeys-pagination.component";
import {JourneysHistoryComponent} from "./journeys-history/journeys-history.component";
import { CarriersComponent } from './journeys-history/carriers/carriers.component';

@NgModule({
  declarations: [
    JourneysFiltrationComponent,
    JourneysHistoryComponent,
    JourneysPaginationComponent,
    CarriersComponent,
  ],
  exports: [
    JourneysFiltrationComponent,
    JourneysHistoryComponent,
    JourneysPaginationComponent
  ],
  imports: [
    CommonModule,
  ],
})

export class JourneysModule { }

//Filtration
export class FilterPage {
  constructor(
    public data: Filter[],
  ) {
  }
}
export class Filter {
  constructor(
    public id: number,
    public name: string,
    public number: string,
    public status: Array<Status[]>
  ) {
  }
}
export class Status {
  constructor(
    public id: number,
    public name: string,
    public title: string
  ) {
  }
}

//History
export class HistoryPage {
  constructor(
    public data: History[],
  ) {
  }
}
export class History {
  constructor(
    public id: number,
    public place_name: string,
    public price: string,
    public created_at: string,
    public carrier: Carriers[],
  ) {
  }
}
export class Carriers {
  constructor (
    public id: number,
    public name: string,
    public number: string,
  ) {
  }
}
