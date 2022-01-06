import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TariffsComponent } from "./components/content/main/tariffs-page/tariffs.component";
import { TariffDetailsComponent } from "./components/content/main/tariff-details-page/tariff-details.component";
import { JourneysComponent } from "./components/content/main/journeys-page/journeys.component";

const routes: Routes = [
  { path: '', component: TariffsComponent },
  { path: 'app-tariff-details-page', component: TariffDetailsComponent },
  { path: 'history', component: JourneysComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
