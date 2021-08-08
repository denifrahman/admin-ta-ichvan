import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaAgendaAgendaListComponent } from './agenda-list.component';

describe('AgendaAgendaAgendaListComponent', () => {
  let component: AgendaAgendaAgendaListComponent;
  let fixture: ComponentFixture<AgendaAgendaAgendaListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaAgendaAgendaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaAgendaAgendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
