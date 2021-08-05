import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterFakultasFakultasEditComponent } from './fakultas-edit.component';

describe('MasterFakultasFakultasEditComponent', () => {
  let component: MasterFakultasFakultasEditComponent;
  let fixture: ComponentFixture<MasterFakultasFakultasEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterFakultasFakultasEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterFakultasFakultasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
