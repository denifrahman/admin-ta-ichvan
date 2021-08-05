import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterProdiProdiAddComponent } from './prodi-add.component';

describe('MasterProdiProdiAddComponent', () => {
  let component: MasterProdiProdiAddComponent;
  let fixture: ComponentFixture<MasterProdiProdiAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterProdiProdiAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterProdiProdiAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
