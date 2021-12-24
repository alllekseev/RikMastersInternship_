import {Component, OnInit} from '@angular/core';
import {NewServiceService} from "../../../../services/new-service.service";
// import {History, Carriers} from "../history.component";

@Component({
  selector: 'app-main-history',
  templateUrl: './main-history.component.html',
  styleUrls: ['./main-history.component.sass'],
})

export class MainHistoryComponent implements OnInit {

  private loading: boolean = true


  // @Input() history: History[] = [];
  // @Input() carriers: Carriers[] = [];

  constructor(public newService: NewServiceService) {
    // console.log();
  }

  ngOnInit() {
    // this.newService.fetchHistory().subscribe(() => {
    //   this.loading = false
    //   // this.history = data;
    // })
    // console.log(this.newService.history.length)
  }

}
