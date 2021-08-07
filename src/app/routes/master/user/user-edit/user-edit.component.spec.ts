import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterUserEditComponent } from './user-edit.component';

describe('MasterUserEditComponent', () => {
  let component: MasterUserEditComponent;
  let fixture: ComponentFixture<MasterUserEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterUserEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
