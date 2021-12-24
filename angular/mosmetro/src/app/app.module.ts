import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { HeaderModule } from "./components/header/header.module";
import { FooterComponent } from './components/footer/footer.component';
import { TariffsComponent } from './components/main/tariffs/tariffs.component';
import { MainComponent } from './components/main/main.component';
import { ContentComponent } from './components/content/content.component';
import { TariffDetailsComponent } from './components/main/tariff-details/tariff-details.component';
import { HistoryComponent } from './components/main/history/history.component';
import { NewServiceService } from "./services/new-service.service";
import { FilterComponent } from './components/main/history/filter/filter.component';
import { MainHistoryComponent } from './components/main/history/main-history/main-history.component';
import { PaginationComponent } from './components/main/history/pagination/pagination.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TariffsComponent,
    MainComponent,
    ContentComponent,
    TariffDetailsComponent,
    HistoryComponent,
    FilterComponent,
    MainHistoryComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderModule,
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
