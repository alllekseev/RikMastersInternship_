import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { HeaderModule } from "./header/header.module";
import { FooterComponent } from './footer/footer.component';
import { TariffsComponent } from './main/tariffs/tariffs.component';
import { MainComponent } from './main/main.component';
import { ContentComponent } from './content/content.component';
import { TariffDetailsComponent } from './main/tariff-details/tariff-details.component';
import { HistoryComponent } from './main/history/history.component';
import { NewServiceService } from "./main/new-service.service";


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
