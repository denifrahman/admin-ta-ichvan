import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterProdiProdiEditComponent } from './prodi-edit.component';

describe('MasterProdiProdiEditComponent', () => {
  let component: MasterProdiProdiEditComponent;
  let fixture: ComponentFixture<MasterProdiProdiEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterProdiProdiEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterProdiProdiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
