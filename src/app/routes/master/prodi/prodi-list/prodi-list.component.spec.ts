import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterProdiProdiListComponent } from './prodi-list.component';

describe('MasterProdiProdiListComponent', () => {
  let component: MasterProdiProdiListComponent;
  let fixture: ComponentFixture<MasterProdiProdiListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterProdiProdiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterProdiProdiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
