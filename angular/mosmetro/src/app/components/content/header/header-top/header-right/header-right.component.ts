import {Component, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from "@angular/material/menu";
import {style} from "@angular/animations";
import {colors} from "@angular/cli/utilities/color";

@Component({
  selector: 'app-header-right',
  templateUrl: './header-right.component.html',
  styleUrls: ['./header-right.component.sass']
})
export class HeaderRightComponent implements OnInit {

  // Button for menu
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger | any;
  someMethod() {
    this.trigger.openMenu();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
