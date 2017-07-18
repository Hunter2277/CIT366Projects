import {EventEmitter, Injectable} from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import {Subject} from "rxjs/Subject";
import {Http, Headers, Response} from '@angular/http';

@Injectable()
export class ContactService {
  maxContactId: number;
  contactListChangedEvent = new Subject<Contact[]>();
  contactSelectedEvent= new EventEmitter<Contact>();
  contactChangedEvent = new EventEmitter<Contact[]>();
  contactsListClone: Contact[] = [];
  contacts: Contact[] = [];


  constructor(private http: Http) {
  this.initContacts();
  }

  initContacts(){
    this.http.get('https://cms-app-48599.firebaseio.com/contacts.json')
      .subscribe((response: Response) => {
        let contacts: Contact[] = response.json();
        this.contacts = contacts;
        this.maxContactId = this.getMaxId();
        this.contactListChangedEvent.next(this.contacts.slice());
      });
  }
  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  getContact(id: string): Contact {

    for (const contact of this.contacts) {
      if (contact.id === id) {
        return contact;
      }
    }
    return null;

  }
  storeContacts(value: Contact[]){
    JSON.stringify(this.contacts);
    return this.http.put('https://cms-app-48599.firebaseio.com/contacts.json',ContactService)
      this.getContacts());
  }


    deleteContact(contact: Contact) {
      if (!contact){
        return;
      }

      const pos = this.contacts.indexOf(contact);
      if (pos < 0) {
        return;
      }
      this.contacts.splice(pos, 1);
      this.contactsListClone = this.contacts.slice();
     this.storeContacts();
    }

  getMaxId():number {
    let maxId = 0;
    for (const contact of this.contacts) {
      if (+contact.id > maxId) {
        maxId = +contact.id;
      }
    }
    return maxId;
  }

    addContact(newContact: Contact){
      if (!newContact) {
        return;
      }
      this.maxContactId++;
      newContact.id = this.maxContactId + '';
      this.contacts.push(newContact);
      this.contactsListClone = this.contacts.slice();
      this.contactListChangedEvent.next(this.contactsListClone)
    }

  updateContact(originalContact: Contact,
                 newContact: Contact){
    if(!originalContact || ! newContact){
      return;
    }

    const pos = this.contacts.indexOf(originalContact);
    if (pos < 0){
      return;
    }
    newContact.id = originalContact.id;
    document[pos] = newContact;
    this.contactsListClone = this.contacts.slice();
    this.storeContacts()
  }



}
