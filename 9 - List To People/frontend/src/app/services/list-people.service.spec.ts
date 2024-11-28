import { TestBed } from '@angular/core/testing';

import { ListPeopleService } from './list-people.service';

describe('ListPeopleService', () => {
  let service: ListPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
