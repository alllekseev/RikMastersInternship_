import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // return MainComponent;
  }
}
