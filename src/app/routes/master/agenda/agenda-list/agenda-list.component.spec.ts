import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAgendaAgendaListComponent } from './agenda-list.component';

describe('MasterAgendaAgendaListComponent', () => {
  let component: MasterAgendaAgendaListComponent;
  let fixture: ComponentFixture<MasterAgendaAgendaListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterAgendaAgendaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterAgendaAgendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
