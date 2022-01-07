import {Component, OnInit} from '@angular/core';

import {Carriers, History} from "../journeys.module";

import {JourneyHistoryService} from "./service/journey-history.service";

@Component({
  selector: 'app-journeys-history',
  templateUrl: './journeys-history.component.html',
  styleUrls: ['./journeys-history.component.sass'],
})

export class JourneysHistoryComponent implements OnInit {

  // carriers: Carriers[] = [];
  history: History[] = [];


  constructor(public newService: JourneyHistoryService) { }

  ngOnInit() {
        this.newService.fetchHistory().subscribe(data => {
      this.history = data
      console.log(this.history)
    })

    // this.newService.fetchCarriers().subscribe(data => {
    //   this.carriers = data
    //   console.log(this.carriers)
    // })

  }
}
