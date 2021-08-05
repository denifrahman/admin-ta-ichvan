import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterUniversitasUniversitasAddComponent } from './universitas-add.component';

describe('MasterUniversitasUniversitasAddComponent', () => {
  let component: MasterUniversitasUniversitasAddComponent;
  let fixture: ComponentFixture<MasterUniversitasUniversitasAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterUniversitasUniversitasAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterUniversitasUniversitasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
