import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterUniversitasUniversitasListComponent } from './universitas-list.component';

describe('MasterUniversitasUniversitasListComponent', () => {
  let component: MasterUniversitasUniversitasListComponent;
  let fixture: ComponentFixture<MasterUniversitasUniversitasListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterUniversitasUniversitasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterUniversitasUniversitasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
