import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {

  date = true;
  card = true;

  toggleDate: string = "Свернуть";
  toggleCard: string = "Свернуть";
  icon: any = "../../../assets/images/angle-up.svg";
  iconCard: any = "../../../assets/images/angle-up.svg";

  constructor() { }

  ngOnInit(): void {
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

  myFilter = (d: Date): boolean => {
    const day = d.getDay();

    return day !== 0 && day !== 6;
  }

}
