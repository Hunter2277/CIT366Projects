import { Component } from '@angular/core';
import {DocumentsService} from "./documents/documents.service";
import {MessageService} from "./messages/message.service";
import {ContactService} from "./contacts/contact.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(documentsService: DocumentsService,
              messageService: MessageService,
              contactService: ContactService){

  }

}
