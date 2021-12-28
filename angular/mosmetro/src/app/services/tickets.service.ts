import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, map, tap} from "rxjs";
// import {Ticket} from "../components/main/tariffs/tariffs.component";

@Injectable({
  providedIn: "root"
})

export class TicketsService {

  ticket: Ticket[] = [];
  // ticket!: { data: Ticket[] };

  constructor(private http:HttpClient) {
    // console.log(this.ticket)
  }


  getTickets(): Observable<Ticket[]> {
    // @ts-ignore
    return this.http.get<Ticket[]>('http://127.0.0.1:8188/api/v1/tickets')
      // @ts-ignore
      .pipe(tap(response => this.ticket = response))
  }

  showTicket() {
    console.log(this.ticket)
  }

}

export class Ticket {
  constructor(
    public id: number,
    public imgUrl: string,
    public name: string,
    public description: string) {
  }

}
