import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import {Message} from '../messages.model';
import {isNull} from "util";
import { MessageService } from '../message.service';
@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild ('subjectInput') subjectInputRef: ElementRef;
  @ViewChild ('msgTextInput') msgTextInputRef: ElementRef;
  @Output () addMessageEvent = new EventEmitter<Message>();
  currentSender = 'Erika Hunter';

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  onSendMessage() {
    const ingSubject = this.subjectInputRef.nativeElement.value;
    const ingMsgText = this.msgTextInputRef.nativeElement.value;
    const senderName = this.currentSender;
    const newMessage = new Message(null, ingSubject, ingMsgText, senderName);
    //this.addMessageEvent.emit(newMessage);
    this.messageService.addMessage(newMessage);

  }

  onClear() {
    this.subjectInputRef.nativeElement.value = null;
    this.msgTextInputRef.nativeElement.value = null;
  }




}
