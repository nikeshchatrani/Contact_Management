import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Contacts } from './contacts'
import { List } from './mock-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): Observable<Contacts[]> {
    
    return of(List);
  }

  getContact(id : number): Observable<Contacts>{
  	return of (List.find(contact => contact.id === id));
  }
}
