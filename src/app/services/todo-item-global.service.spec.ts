import { TestBed } from '@angular/core/testing';

import { TodoItemGlobalService } from './todo-item-global.service';

describe('TodoItemGlobalService', () => {
  let service: TodoItemGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoItemGlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
