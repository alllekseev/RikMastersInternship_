import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TariffsComponent } from "./main/tariffs/tariffs.component";
import { TariffDetailsComponent } from "./main/tariff-details/tariff-details.component";
import { HistoryComponent } from "./main/history/history.component";

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'tariffs', component: TariffsComponent },
  { path: 'tariff-details', component: TariffDetailsComponent },
  { path: 'history', component: HistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
