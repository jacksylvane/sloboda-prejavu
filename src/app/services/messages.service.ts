import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      // console.log(JSON.stringify(data));
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('../../assets/messages.json');
  }
  getMessages() {
    this.getJSON().subscribe(data => {
      // console.log(data);
    });
  }
}
