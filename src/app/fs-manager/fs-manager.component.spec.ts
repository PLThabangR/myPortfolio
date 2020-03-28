import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsManagerComponent } from './fs-manager.component';

describe('FsManagerComponent', () => {
  let component: FsManagerComponent;
  let fixture: ComponentFixture<FsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
