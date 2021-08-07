import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterUserListComponent } from './user-list.component';

describe('MasterUserListComponent', () => {
  let component: MasterUserListComponent;
  let fixture: ComponentFixture<MasterUserListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
