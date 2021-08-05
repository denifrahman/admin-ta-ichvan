import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterUniversitasUniversitasEditComponent } from './universitas-edit.component';

describe('MasterUniversitasUniversitasEditComponent', () => {
  let component: MasterUniversitasUniversitasEditComponent;
  let fixture: ComponentFixture<MasterUniversitasUniversitasEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterUniversitasUniversitasEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterUniversitasUniversitasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
