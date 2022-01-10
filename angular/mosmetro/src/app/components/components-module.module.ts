import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ContentModule} from "./content/content.module";

import {FooterComponent} from "./footer/footer.component";

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ContentModule,
  ],
})
export class ComponentsModuleModule { }
