import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {JourneysFiltrationComponent} from "./journeys-filtration/journeys-filtration.component";
import {JourneysPaginationComponent} from "./journeys-pagination/journeys-pagination.component";
import {JourneysHistoryComponent} from "./journeys-history/journeys-history.component";

import {FiltrationService} from "./journeys-filtration/service/filtration.service";
import {JourneyHistoryService} from "./journeys-history/service/journey-history.service";

@NgModule({
  declarations: [
    JourneysFiltrationComponent,
    JourneysHistoryComponent,
    JourneysPaginationComponent,
  ],
  exports: [
    JourneysFiltrationComponent,
    JourneysHistoryComponent,
    JourneysPaginationComponent
  ],
  imports: [
    CommonModule,
  ],
  // providers: [FiltrationService, JourneyHistoryService]
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
    public carriers: Carriers[],
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
