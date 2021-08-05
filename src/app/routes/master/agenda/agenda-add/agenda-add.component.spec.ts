import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAgendaAgendaAddComponent } from './agenda-add.component';

describe('MasterAgendaAgendaAddComponent', () => {
  let component: MasterAgendaAgendaAddComponent;
  let fixture: ComponentFixture<MasterAgendaAgendaAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterAgendaAgendaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterAgendaAgendaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
