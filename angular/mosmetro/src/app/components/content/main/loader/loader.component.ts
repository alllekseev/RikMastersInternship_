import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {InterceptorService} from "../../../loaderServer/interceptor.service";
import {LoaderService} from "../../../loaderServer/loader.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass'],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoaderComponent implements OnInit {

  constructor(public loaderService: LoaderService) { }

  ngOnInit(): void {
  }

}
