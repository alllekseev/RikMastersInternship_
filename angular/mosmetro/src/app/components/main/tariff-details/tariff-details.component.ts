import { Component, OnInit } from '@angular/core';
import {Tariff, Offers, TariffsService} from "../../../services/tariffs.service";

@Component({
  selector: 'app-tariff-details',
  templateUrl: './tariff-details.component.html',
  styleUrls: ['./tariff-details.component.sass']
})
export class TariffDetailsComponent implements OnInit {

  tariffs: Tariff[] = [];
  offers: Offers[] = [];

  constructor(private tariffsService: TariffsService) { }

  ngOnInit(): void {
    this.tariffsService.getTariffs().subscribe(data => {
      this.tariffs = data;
    })
  }
}
