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
    RouterModule
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
