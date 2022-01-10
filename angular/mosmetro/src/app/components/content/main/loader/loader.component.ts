import { Component, OnInit } from '@angular/core';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {InterceptorService} from "../../../loaderServer/interceptor.service";
import {LoaderService} from "../../../loaderServer/loader.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass'],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}]
})
export class LoaderComponent implements OnInit {

  constructor(public loaderService: LoaderService) { }

  ngOnInit(): void {
  }

}
