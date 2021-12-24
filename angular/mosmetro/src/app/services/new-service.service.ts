import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, pipe, Subscription, tap, map} from "rxjs";

export interface History {
  id: number;
  place_name: string;
  price: string;
  created_at: string;
  // carriers: Carriers[];
}

export interface Carriers {
  id: number;
  name: string;
  number: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  public carriers: Carriers[] = [];
  public history: History[] = [];

  // data = this.http.get('http://127.0.0.1:8188/api/v1/history');

  constructor(private http: HttpClient) {
    // console.log(this.data)
  }

  // fetchHistory(): Observable<History[]> {
  //   return this.http.get('http://127.0.0.1:8188/api/v1/history')
  //     .pipe(tap({} => () ))
  //     // .pipe(tap(history =>  this.history.jso))
  // }
}
