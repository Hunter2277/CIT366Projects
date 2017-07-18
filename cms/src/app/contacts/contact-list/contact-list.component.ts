import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Contact} from '../contact.model';
import {ContactService} from '../contact.service';
import {Subscription} from "rxjs/Subscription";
import {ContactsFilterPipe} from '../contacts-filter.pipe';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
  subscription: Subscription;
contactSelectedEvent = new EventEmitter<Contact>();
term: string;

  contacts: Contact[] = [];



  constructor(private contactService: ContactService) {
    this.contacts = this.contactService.getContacts();
  }

  ngOnInit() {
    this.subscription = this.contactService.contactChangedEvent
      .subscribe(
        (contactList: Contact []) => {
          this.contacts = contactList;
        }
      )
  }


  onSelected(contact: Contact) {
    this.contactService.contactSelectedEvent.emit(contact);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onKeyPress(value:string){
    this.term = value;
  }
}
