import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
      { id: 11, firstName: 'Mr. Nice', lastName: 'Roy', email: 'xyz@k.com', phoneNumber:8765432109, status:'active' },
	  { id: 12, firstName: 'Narco', lastName: 'Roy', email: 'xyz@k.com', phoneNumber:8765432109, status:'active' },
	  { id: 13, firstName: 'Bombasto', lastName: 'Roy', email: 'xyz@k.com', phoneNumber:8765432109, status:'inactive' },
	  { id: 14, firstName: 'Celeritas', lastName: 'Roy', email: 'xyz@k.com', phoneNumber:8765432109, status:'inactive' },
	  { id: 15, firstName: 'Magneta', lastName: 'Roy', email: 'xyz@k.com', phoneNumber:8765432109, status:'active' },
	  { id: 16, firstName: 'RubberMan', lastName: 'Roy', email: 'xyz@k.com', phoneNumber:8765432109, status:'inactive' },
	  { id: 17, firstName: 'Dynama', lastName: 'Roy', email: 'xyz@k.com', phoneNumber:8765432109, status:'active' },
	  { id: 18, firstName: 'Dr IQ', lastName: 'Roy', email: 'xyz@k.com', phoneNumber:8765432109, status:'active' },
	  { id: 19, firstName: 'Magma', lastName: 'Roy', email: 'xyz@k.com', phoneNumber:8765432109, status:'inactive' },
	  { id: 20, firstName: 'Tornado', lastName: 'Roy', email: 'xyz@k.com', phoneNumber:8765432109, status:'active' }
    ];
    return {contacts};
  }
}