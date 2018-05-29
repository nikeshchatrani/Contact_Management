import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Contacts } from '../contacts';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  contacts: Contacts[];

  constructor(
  public route: ActivatedRoute,
  private contactService: ContactService,
  private location: Location
  ) {  }

  ngOnInit() {
  	this.getContacts();
  }

  goBack(): void {
    this.location.back();
  }

  getContacts(): void {
    this.contactService.getContacts()
        .subscribe(contacts => this.contacts = contacts);
  }

  add(firstName: string, lastName:string, email: string, phoneNumber: number, status: string): void {
  firstName = firstName.trim();
  lastName = lastName.trim();
  if (!firstName && !lastName ) {
      return; 
  }
  this.contactService.addContact({ firstName, lastName, email, phoneNumber, status } as Contacts)
    .subscribe(contact => {
      this.contacts.push(contact);
    });
    this.goBack();
  }

}
