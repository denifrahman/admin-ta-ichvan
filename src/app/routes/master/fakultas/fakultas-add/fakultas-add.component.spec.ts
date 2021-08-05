import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterFakultasFakultasAddComponent } from './fakultas-add.component';

describe('MasterFakultasFakultasAddComponent', () => {
  let component: MasterFakultasFakultasAddComponent;
  let fixture: ComponentFixture<MasterFakultasFakultasAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterFakultasFakultasAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterFakultasFakultasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
