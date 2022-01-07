import { Component, OnInit } from '@angular/core';
import {JourneyHistoryService} from "../service/journey-history.service";
import {Carriers} from "../../journeys.module";

@Component({
  selector: 'app-carriers',
  templateUrl: './carriers.component.html',
  styleUrls: ['./carriers.component.sass']
})
export class CarriersComponent implements OnInit {

  carriers: Carriers[] = [];

  constructor(public newService: JourneyHistoryService) { }

  ngOnInit(): void {
    this.newService.fetchCarriers().subscribe(carrier => {
      this.carriers = carrier
      console.log(this.carriers)
    })

    this.newService.toLog()
  }
}
