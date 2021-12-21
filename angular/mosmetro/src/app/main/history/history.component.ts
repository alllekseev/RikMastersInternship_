import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {

  date = true;
  card = true;

  userName: string ="";
  response: any;

  toggleDate: string = "Свернуть";
  toggleCard: string = "Свернуть";
  icon: any = "../../../assets/images/angle-up.svg";
  iconCard: any = "../../../assets/images/angle-up.svg";


  constructor(private http: HttpClient) {

  }
  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      })
  }

  ngOnInit(): void {
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
