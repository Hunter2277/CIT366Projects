import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Contact} from '../contact.model';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Output() selectedContactEvent = new EventEmitter<Contact>();

  contacts: Contact[]= [
    new Contact('1',
      'Bro Jackson',
      'jacksonk@byui.edu',
      2084963771,
      'https://web.byui.edu/Directory/Employee/jacksonk.jpg',
    null),
    new Contact('2',
      'Bro Barzee',
      'barzeer@byui.edu',
      2084963768,
      'https://web.byui.edu/Directory/Employee/barzeer.jpg',
      null)
  ];



  constructor() { }

  ngOnInit() {
  }

  onSelected(contact: Contact) {
    this.selectedContactEvent.emit(contact);
  }

}
