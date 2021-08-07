import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterUserAddComponent } from './user-add.component';

describe('MasterUserAddComponent', () => {
  let component: MasterUserAddComponent;
  let fixture: ComponentFixture<MasterUserAddComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterUserAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterUserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
