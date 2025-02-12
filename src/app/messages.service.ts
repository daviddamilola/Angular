import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private readonly http: HttpClient) { }

  getMessages() {
    let query = 'http://elvis.misc.cranfield.ac.uk/practical_api/messages';
    return this.http.get<Message[]>(query);
  }

  sendMessage(message: Message){
    let query = 'http://elvis.misc.cranfield.ac.uk/practical_api/sendmessage';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
      return this.http.post<Message>(query, message, httpOptions);
    }
}
