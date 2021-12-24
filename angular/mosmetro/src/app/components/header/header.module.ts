import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderLeftComponent } from './header-left/header-left.component';
import { HeaderMiddleComponent } from './header-middle/header-middle.component';
import { HeaderRightComponent } from './header-right/header-right.component';
import { HeaderButtonComponent } from './header-button/header-button.component';
import { HeaderComponent } from './header.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import {AppRoutingModule} from "../../app-routing.module";

@NgModule({
  declarations: [
    HeaderLeftComponent,
    HeaderMiddleComponent,
    HeaderRightComponent,
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
    ]
})
export class HeaderModule { }
