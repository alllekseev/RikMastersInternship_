import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderLeftComponent} from "./header-left/header-left.component";
import {HeaderMiddleComponent} from "./header-middle/header-middle.component";
import {HeaderRightComponent} from "./header-right/header-right.component";

import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HeaderLeftComponent,
    HeaderMiddleComponent,
    HeaderRightComponent
  ],
  exports: [
    HeaderLeftComponent,
    HeaderRightComponent,
    HeaderMiddleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HeaderTopModuleModule { }
