import { Component, OnInit } from '@angular/core';

import {Filter, Status} from "../journeys.module";

import {FiltrationService} from "./service/filtration.service";

@Component({
  selector: "app-journeys-filtration",
  templateUrl: './journeys-filtration.component.html',
  styleUrls: ['./journeys-filtration.component.sass'],
})

export class JourneysFiltrationComponent implements OnInit {

  // get data from API
  filter: Filter[] = [];
  status: Status[] = [];

  // toggles
  date = true;
  card = true;

  toggleDate: string = "Свернуть";
  toggleCard: string = "Свернуть";
  icon: string = "../../../assets/images/angle-up.svg";
  iconCard: string = "../../../assets/images/angle-up.svg";

  someTitle!: string;

  constructor(private filterService: FiltrationService) {}

  ngOnInit(): void {
    this.filterService.getCarriers().subscribe(data => {
      this.filter = data
    })
  }

  toShowDate() {
    this.date = !this.date;
    if(!this.date) {
      this.toggleDate = "Развернуть"
      this.icon = "../../../assets/images/angle-down.svg";
    } else {
      this.toggleDate = "Свернуть";
      this.icon = "../../../assets/images/angle-up.svg";
    }
  }
  toShowCard() {
    this.card = !this.card;
    if(!this.card) {
      this.toggleCard = "Развернуть"
      this.iconCard = "../../../assets/images/angle-down.svg";
    } else {
      this.toggleCard = "Свернуть";
      this.iconCard = "../../../assets/images/angle-up.svg";
    }
  }

  // filter for Calendar
  // myFilter = (d: Date): boolean => {
  //   const day = d.getDay();
  //
  //   return day !== 0 && day !== 6;
  // }
}
