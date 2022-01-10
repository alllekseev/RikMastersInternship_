import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from "./header/header.module";
import { MainModule } from "./main/main.module";

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    MainModule
  ]
})
export class ContentModule { }
