import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AppRoutingModule} from "../../../app-routing.module";

import {HeaderTopModuleModule} from "./header-top/header-top-module.module";

import { HeaderButtonComponent } from './header-button/header-button.component';
import { HeaderComponent } from './header.component';
import {HeaderTopComponent} from "./header-top/header-top.component";

@NgModule({
    declarations: [
        HeaderButtonComponent,
        HeaderComponent,
        HeaderTopComponent,
    ],
  exports: [
    HeaderComponent
  ],
    imports: [
      CommonModule,
      AppRoutingModule,
      HeaderTopModuleModule
    ]
})
export class HeaderModule { }
