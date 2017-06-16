import {EventEmitter, Injectable} from '@angular/core';
import { Message } from './messages.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable()
export class MessageService {
messages: Message[] = [];
messageChangeEvent = new EventEmitter<Message[]>();
  constructor() {
    this.messages = MOCKMESSAGES;
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

}
