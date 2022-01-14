import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {JourneysFiltrationComponent} from "./journeys-filtration/journeys-filtration.component";
import {JourneysPaginationComponent} from "./journeys-pagination/journeys-pagination.component";
import {JourneysHistoryComponent} from "./journeys-history/journeys-history.component";
import {LoaderComponent} from "../loader/loader.component";

import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    JourneysFiltrationComponent,
    JourneysHistoryComponent,
    JourneysPaginationComponent,
    LoaderComponent
  ],
  exports: [
    JourneysFiltrationComponent,
    JourneysHistoryComponent,
    JourneysPaginationComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatPaginatorModule
  ],
})

export class JourneysModule { }

//Занести описание моделей классов в Services?

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
