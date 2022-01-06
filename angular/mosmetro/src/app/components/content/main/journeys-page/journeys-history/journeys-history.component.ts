import {Component, OnInit} from '@angular/core';

import {History} from "../journeys.module";

import {JourneyHistoryService} from "./service/journey-history.service";

@Component({
  selector: 'app-journeys-history',
  templateUrl: './journeys-history.component.html',
  styleUrls: ['./journeys-history.component.sass'],
})

export class JourneysHistoryComponent implements OnInit {

  history: History[] = [];

  constructor(public newService: JourneyHistoryService) { }

  ngOnInit() {
    this.newService.fetchHistory().subscribe(data => {
      this.history = data
      console.log(history)
    })
  }
}
