import {Component, OnInit} from '@angular/core';

import {Carriers, History} from "../journeys.module";

import {JourneyHistoryService} from "./service/journey-history.service";

@Component({
  selector: 'app-journeys-history',
  templateUrl: './journeys-history.component.html',
  styleUrls: ['./journeys-history.component.sass'],
})

export class JourneysHistoryComponent implements OnInit {

  public page!: number

  public collectionSize!: number;

  carrier!: Carriers[];
  history!: History[];


  constructor(public newService: JourneyHistoryService) { }

  ngOnInit() {
    this.page = 1;
    this.newService.fetchHistory().subscribe(data => {
      this.history = data
      this.collectionSize = this.history.length;
      // console.log(this.history)
    })

    this.newService.fetchCards().subscribe(card => {
      this.carrier = card
      console.log(this.carrier)
    })
  }

  onPageChange(pageNumber: any) {
    console.log("page.changed:" + pageNumber)
  }
}
