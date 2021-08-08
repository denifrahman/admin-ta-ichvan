import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaAgendaAgendaAddComponent } from './agenda-add.component';

describe('AgendaAgendaAgendaAddComponent', () => {
  let component: AgendaAgendaAgendaAddComponent;
  let fixture: ComponentFixture<AgendaAgendaAgendaAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaAgendaAgendaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaAgendaAgendaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
