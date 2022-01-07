import { Component, OnInit } from '@angular/core';

import {TariffDetailsService} from "./service/tariff-details.service";

import {Offers, Tariff} from "../main.module";

@Component({
  selector: 'app-tariff-details-page',
  templateUrl: './tariff-details.component.html',
  styleUrls: ['./tariff-details.component.sass']
})

export class TariffDetailsComponent implements OnInit {

  tariffs: Tariff[] = [];
  offers: Offers[] = [];

  constructor(private tariffsService: TariffDetailsService) { }

  ngOnInit(): void {
    this.tariffsService.getTariffs().subscribe(data => {
      this.tariffs = data;
    })
  }
}
