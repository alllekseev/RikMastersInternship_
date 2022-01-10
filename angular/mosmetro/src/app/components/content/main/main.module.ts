import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {JourneysComponent} from "./journeys-page/journeys.component";
import {TariffsComponent} from "./tariffs-page/tariffs.component";
import {TariffDetailsComponent} from "./tariff-details-page/tariff-details.component";

import {JourneysModule} from "./journeys-page/journeys.module";

import {TariffDetailsService} from "./tariff-details-page/service/tariff-details.service";
import {TariffsService} from "./tariffs-page/service/tariffs.service";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    JourneysComponent,
    TariffDetailsComponent,
    TariffsComponent,
  ],
  imports: [
    CommonModule,
    JourneysModule,
    RouterModule,
  ],
  exports: [
    JourneysComponent,
    TariffDetailsComponent,
    TariffsComponent,
  ],
  providers: [
    TariffDetailsService,
    TariffsService
  ]
})

export class MainModule { }

// Занести описание моделий в Services?

// Tariffs
export class TariffsPage {
  constructor(
    public data: Ticket[],
  ) {
  }
}
export class Ticket {
  constructor(
    public id: number,
    public image_url: string,
    public name: string,
    public description: string
  ) {
  }
}

//Tariff details
export class TariffPage {
  constructor(
    //@ts-ignore
    public data: Tariff[],
  ) {
  }
}
export class Tariff {
  constructor(
    public id: number,
    public name: string,
    public title: string,
    public description: string,
    public offers: Offers[],
  ) {
  }
}
export class Offers {
  constructor(
    public id: number,
    public name: string,
    public description: null,
    public price: string
  ) {
  }
}
