import { Component, OnInit } from '@angular/core';
import { Contacts } from '../contacts'
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
	
	selectedContact: Contacts;
	contacts : Contacts[];

	

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  	this.getContacts();
  }

  onSelect(contact: Contacts): void {
    this.selectedContact = contact;
  }

  getContacts(): void {
    this.contactService.getContacts()
        .subscribe(contacts => this.contacts = contacts);
  }

}
