import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackPicComponent } from './back-pic.component';

describe('BackPicComponent', () => {
  let component: BackPicComponent;
  let fixture: ComponentFixture<BackPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
