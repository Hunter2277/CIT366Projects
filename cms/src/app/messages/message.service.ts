import {EventEmitter, Injectable} from '@angular/core';
import { Message } from './messages.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import {Subject} from "rxjs/Subject";
import {Http, Headers, Response} from '@angular/http';

@Injectable()
export class MessageService {
messages: Message[] = [];
messageListChangedEvent= new Subject<Message[]>();
  maxMessageId: number;
messageChangeEvent = new EventEmitter<Message[]>();

  constructor() {
   this.initMessages();
  }

  initMessages(){
    this.http.get('https://cms-app-48599.firebaseio.com/messages.json')
      .subscribe((response: Response) => {
        let messages: Message[] = response.json();
        this.messages = messages;
        this.maxMessageId = this.getMaxId();
        this.messageListChangedEvent.next(this.messages.slice());
      });
  }

  addMessage(message: Message){
    this.messages.push(message)
    this.messageChangeEvent.emit(this.messages)

  }
  getMessages(){
    return this.messages.slice();
  }

  getMessage(id:string): Message {

      for (const message of this.messages) {
        if (message.id === id) {
          return message;
        }
      }
      return null;
  }

  getMaxId():number {
      let maxId = 0;
      for (const message of this.messages) {
        if (+message.id > maxId) {
          maxId = +message.id;
        }
      }
      return maxId;
    }
  storeContacts(value: Message[]){
    JSON.stringify(this.messages);
    return this.http.put('https://cms-app-48599.firebaseio.com/messages.json',MessageService)
    this.getMessages());
}

}
