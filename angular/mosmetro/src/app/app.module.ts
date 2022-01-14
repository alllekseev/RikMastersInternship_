import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpClientJsonpModule} from "@angular/common/http";

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { HeaderModule } from "./components/content/header/header.module";

import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/content/main/main.component';
import { ContentComponent } from './components/content/content.component';
import { FooterLinksComponent } from './components/footer/footer-links/footer-links.component';
import {ContentModule} from "./components/content/content.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatProgressBarModule} from "@angular/material/progress-bar";
import {InterceptorService} from "./components/loaderServer/interceptor.service";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        MainComponent,
        ContentComponent,
        FooterLinksComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        HeaderModule,
        ContentModule,
        BrowserAnimationsModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
    ],
    exports: [
        ContentComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
