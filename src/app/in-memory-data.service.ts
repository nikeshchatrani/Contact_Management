import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
      { id: 11, firstName: 'John', lastName: 'Smith', email: 'john.smith@abc.com', phoneNumber:9765462109, status:'active' },
	  { id: 12, firstName: 'Jen', lastName: 'Parker', email: 'jen.parker@abc.com', phoneNumber:9265432104, status:'active' },
	  { id: 13, firstName: 'Fiona', lastName: 'Wells', email: 'fiona.wells@abc.com', phoneNumber:6765432105, status:'inactive' },
	  { id: 14, firstName: 'Michelle', lastName: 'Lie', email: 'michelle.lie@abc.com', phoneNumber:9705432109, status:'inactive' },
	  { id: 15, firstName: 'Brian', lastName: 'Fence', email: 'brian.fence@abc.com', phoneNumber:7765482109, status:'active' },
	  { id: 16, firstName: 'Kate', lastName: 'Samson', email: 'kate.samson@abc.com', phoneNumber:4765432109, status:'inactive' },
	  { id: 17, firstName: 'Kelly', lastName: 'Johnson', email: 'kelly.johnson@abc.com', phoneNumber:8865432109, status:'active' },
	  { id: 18, firstName: 'Surendra', lastName: 'Chetty', email: 'surendra.chetty@kbc.com', phoneNumber:9065432109, status:'active' },
	  { id: 19, firstName: 'Kaveri', lastName: 'Matani', email: 'kaveri.matani@cnbc.com', phoneNumber:9865432109, status:'inactive' },
	  { id: 20, firstName: 'Jessica', lastName: 'Chandler', email: 'jessica.chandler@jpeg.com', phoneNumber:8765342109, status:'active' }
    ];
    return {contacts};
  }
}