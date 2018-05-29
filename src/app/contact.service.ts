import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Contacts } from './contacts'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsUrl = 'api/contacts';
  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contacts[]> {
    
    return this.http.get<Contacts[]>(this.contactsUrl)
      .pipe(
        tap(contacts => this.log(`fetched contacts`)),
        catchError(this.handleError('getContacts', []))
      );
  }

  getContactNo404<Data>(id: number): Observable<Contacts> {
    const url = `${this.contactsUrl}/?id=${id}`;
    return this.http.get<Contacts[]>(url)
      .pipe(
        map(contacts => contacts[0]),
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} contact id=${id}`);
        }),
        catchError(this.handleError<Contacts>(`getContact id=${id}`))
      );
  }

  getContact(id: number): Observable<Contacts> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<Contacts>(url).pipe(
      tap(_ => this.log(`fetched contact id=${id}`)),
      catchError(this.handleError<Contacts>(`getContact id=${id}`))
    );
  }

   addContact (contact: Contacts): Observable<Contacts> {
    return this.http.post<Contacts>(this.contactsUrl, contact, httpOptions).pipe(
      tap((contact: Contacts) => this.log(`added contact w/ id=${contact.id}`)),
      catchError(this.handleError<Contacts>('addContact'))
    );
  }

  deleteContact (contact: Contacts | number): Observable<Contacts> {
    const id = typeof contact === 'number' ? contact : contact.id;
    const url = `${this.contactsUrl}/${id}`;
 
    return this.http.delete<Contacts>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted contact id=${id}`)),
      catchError(this.handleError<Contacts>('deleteContact'))
    );
  }

  updateContact (contact: Contacts): Observable<any> {
    return this.http.put(this.contactsUrl, contact, httpOptions).pipe(
      tap(_ => this.log(`updated contact id=${contact.id}`)),
      catchError(this.handleError<any>('updateContact'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      //console.error(error); 
 
      this.log(`${operation} failed: ${error.message}`);
 
      return of(result as T);
    };
  }

  private log(message: string) {
    //console.log('ContactService: ' + message);
  }

}
