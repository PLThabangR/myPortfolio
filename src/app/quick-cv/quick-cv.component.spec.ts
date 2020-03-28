import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickCvComponent } from './quick-cv.component';

describe('QuickCvComponent', () => {
  let component: QuickCvComponent;
  let fixture: ComponentFixture<QuickCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
