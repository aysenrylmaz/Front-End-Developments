import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Program3Component } from './program3.component';

describe('Program3Component', () => {
  let component: Program3Component;
  let fixture: ComponentFixture<Program3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Program3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Program3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
