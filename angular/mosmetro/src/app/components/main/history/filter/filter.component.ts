import { Component, OnInit } from '@angular/core';
import {Filter, Status, FilterService, FilterPage} from "../../../../services/filter.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {

  // @ts-ignore
  filterPage: FilterPage[] = [];
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

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.filterService.getCarriers().subscribe(data => {
      // @ts-ignore
      data.forEach(item => {
        // @ts-ignore
        this.filter.push(new Filter(item['id'], item['name'], item['number'], item['status']));
        // @ts-ignore
        this.status.push(new Status(item.status['id'], item.status['name'], item.status['title']))
        console.log(this.filter)

        for(let status of this.status) {
          this.someTitle = status.title;
        }
      })
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

  myFilter = (d: Date): boolean => {
    const day = d.getDay();

    return day !== 0 && day !== 6;
  }
}
