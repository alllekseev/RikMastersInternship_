import { Component, OnInit } from '@angular/core';
import {Filter, Status, FilterService} from "../../../../services/filter.service";
import {NgModule} from "@angular/core";
import {filter, toArray} from "rxjs";
import {global} from "@angular/compiler/src/util";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {

  // @ts-ignore
  filter: Filter[] = [];
  status: Status[] = [];

  date = true;
  card = true;

  toggleDate: string = "Свернуть";
  toggleCard: string = "Свернуть";
  icon: string = "../../../assets/images/angle-up.svg";
  iconCard: string = "../../../assets/images/angle-up.svg";

  // someTitle!: string = this.filter;
  // image: string = 'http://127.0.0.1:8188/storage/uploads/'; // добавить картинки в API

  constructor(private filterService: FilterService) {}


  // changeTitle(elem) {
  //   if(elem === 'await') {
  //     this.someTitle
  //   }
  // }

  ngOnInit(): void {
    this.filterService.getCarriers().subscribe(data => {
      data.forEach(item => {
        this.filter.push(new Filter(item['id'], item['name'], item['number'], item['status']));
        // @ts-ignore
        this.status.push(new Status(item.status['id'], item.status['name'], item.status['title']))
      })

      // this.filter = data;
      console.log(this.filter)

      // @ts-ignore
      // if(this.status.include('ready')) {
      //   console.log(1)
      // }



    })

    // console.log(this.someTitle);

    // this.changeTitle()



    // @ts-ignore
    // setTimeout(this.toConsole, 5000)


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

  // @ts-ignore



}
