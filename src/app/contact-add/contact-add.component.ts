import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { showOnAdd } from '../contact-add';
import { Contacts } from '../contacts';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  @Input() showonadd: showOnAdd;
	
  contacts: Contacts[];

  constructor(
  private route: ActivatedRoute,
  private contactService: ContactService,
  private location: Location
  ) { }

  ngOnInit() {
  	this.getContacts();
  }

  goBack(): void {
    this.location.back();
  }

  getContacts(): void {
    this.contactService.getContacts()
        .subscribe(contacts => this.contacts = contacts);
    this.showOnAdd : true;
  }

  add(firstName: string, lastName:string, email: string, phoneNumber: number, status: string): void {
  firstName = firstName.trim();
  if (!firstName) { return; }
  this.contactService.addContact({ firstName, lastName, email, phoneNumber, status } as Contacts)
    .subscribe(contact => {
      this.contacts.push(contact);
    });
}

}
