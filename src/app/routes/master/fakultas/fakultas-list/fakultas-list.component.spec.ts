import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterFakultasFakultasListComponent } from './fakultas-list.component';

describe('MasterFakultasFakultasListComponent', () => {
  let component: MasterFakultasFakultasListComponent;
  let fixture: ComponentFixture<MasterFakultasFakultasListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterFakultasFakultasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterFakultasFakultasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
