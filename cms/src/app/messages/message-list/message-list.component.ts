import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Message} from '../messages.model';
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  @Output() selectedMessageEvent = new EventEmitter<Message>();
  messages: Message[]= [
    new Message(
      '1',
      'Hello World',
      'I am very hungry today, would you like to get fish and chips with me?',
     'Erika Hunter'),
    new Message('2',
      'Wusup!?',
      'Yo home skillet, I was thinkin that you be needin some flippin dippen corn dogs yo!',
     'Shaniqua Best'),
    new Message('3',
      'Id rather not...',
      'I am deeply honored by your proposed meal, however I am not quite hungry for corn dogs.',
      'William James 111')
  ];
  onSelected(message: Message) {
    this.selectedMessageEvent.emit(message);
  }
  onAddMessage(message: Message) {
    this.messages.push(message);
  }
  constructor() { }

  ngOnInit() {
  }

}
