import {Component, OnInit} from '@angular/core';
import {NewServiceService} from "../../../../services/new-service.service";
import {History} from "../../../../services/new-service.service";


@Component({
  selector: 'app-main-history',
  templateUrl: './main-history.component.html',
  styleUrls: ['./main-history.component.sass'],
})

export class MainHistoryComponent implements OnInit {

  history: History[] = [];


  // @Input() history: History[] = [];
  // @Input() carriers: Carriers[] = [];

  constructor(public newService: NewServiceService) {
    // console.log();
  }

  ngOnInit() {
    this.newService.fetchHistory().subscribe(data => {
      this.history = data
      console.log(history)
    })
    // console.log(this.newService.history)
  }

}
