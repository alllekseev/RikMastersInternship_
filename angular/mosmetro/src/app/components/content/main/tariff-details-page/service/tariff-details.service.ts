import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, map} from "rxjs";

import {Offers, Tariff, TariffPage} from "../../main.module";
import {methods} from "../../../../../global";
import {environment} from "../../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class TariffDetailsService {
  tariff: Tariff[] = [];
  offers!: Offers[];

  constructor(private httpClient: HttpClient) {
  }

  getTariffs(): Observable<Tariff[]> {
    // @ts-ignore
    return this.httpClient.get<TariffPage>(environment.hostAPI + methods.tariffs)
      .pipe(
        map(response => this.tariff = response.data),
      )
  }
}
