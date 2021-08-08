import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaAgendaAgendaEditComponent } from './agenda-edit.component';

describe('AgendaAgendaAgendaEditComponent', () => {
  let component: AgendaAgendaAgendaEditComponent;
  let fixture: ComponentFixture<AgendaAgendaAgendaEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaAgendaAgendaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaAgendaAgendaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
