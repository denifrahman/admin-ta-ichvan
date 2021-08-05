import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAgendaAgendaEditComponent } from './agenda-edit.component';

describe('MasterAgendaAgendaEditComponent', () => {
  let component: MasterAgendaAgendaEditComponent;
  let fixture: ComponentFixture<MasterAgendaAgendaEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterAgendaAgendaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterAgendaAgendaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
