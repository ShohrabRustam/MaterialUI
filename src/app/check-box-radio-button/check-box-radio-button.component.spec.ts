import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxRadioButtonComponent } from './check-box-radio-button.component';

describe('CheckBoxRadioButtonComponent', () => {
  let component: CheckBoxRadioButtonComponent;
  let fixture: ComponentFixture<CheckBoxRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBoxRadioButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
