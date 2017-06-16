import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Message} from '../messages.model';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  @Output() selectedMessageEvent = new EventEmitter<Message>();
  messages: Message[] = [];

  onSelected(message: Message) {
    this.selectedMessageEvent.emit(message);
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }

  constructor(private messageService: MessageService) {
    this.messages = this.messageService.getMessages();
  }

  ngOnInit() {
    this.messageService.messageChangeEvent
      .subscribe(
        (messages: Message[]) => {
          this.messages = messages;
        })
  }
}
