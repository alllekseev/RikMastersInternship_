import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TariffsComponent } from "./components/main/tariffs/tariffs.component";
import { TariffDetailsComponent } from "./components/main/tariff-details/tariff-details.component";
import { HistoryComponent } from "./components/main/history/history.component";

const routes: Routes = [
  { path: '', component: TariffsComponent },
  { path: 'tariff-details', component: TariffDetailsComponent },
  { path: 'history', component: HistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
