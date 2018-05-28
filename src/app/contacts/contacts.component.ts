import { Component, OnInit } from '@angular/core';
import { showOnAdd } from '../contact-add';
import { Contacts } from '../contacts'
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
	
	selectedContact: Contacts;
	contacts : Contacts[] = [];
  showOnAdd : false;
	

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

  delete(contact: Contacts): void {
    this.contacts = this.contacts.filter(h => h !== contact);
    this.contactService.deleteContact(contact).subscribe();
  }

  showAddContact(flag: showOnAdd): void{
    this.showOnAdd = flag;
  }

}
