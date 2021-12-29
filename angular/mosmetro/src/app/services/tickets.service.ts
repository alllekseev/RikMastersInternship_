import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: "root"
})

export class TicketsService {

  ticket: Ticket[] = [];

  constructor(private http:HttpClient) { }


  getTickets(): Observable<Ticket[]> {
    // @ts-ignore
    return this.http.get<Ticket[]>('http://127.0.0.1:8188/api/v1/tickets')
      // @ts-ignore
      .pipe(tap(response => this.ticket = response))
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
