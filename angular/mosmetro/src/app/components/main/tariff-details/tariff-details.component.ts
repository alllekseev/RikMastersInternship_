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
      console.log(data);
      // // @ts-ignore
      // data['data'].forEach(item => {
      //   this.tariffs.push(new Tariff(item['id'], item['name'], item['title'], item['destination'], item['offers']))
      // })
      // // @ts-ignore
      // data['data'].forEach(off => {
      //   this.offers.push(new Offers(off['id'], off['name'], off['description'], off['price']))
      // })
    })
    // this.tariffsService.getTariffs()
    // console.log(this.tariffs[0].offers)
  }

}
