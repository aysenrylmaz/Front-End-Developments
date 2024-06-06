import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Program4Component } from './program4.component';

describe('Program4Component', () => {
  let component: Program4Component;
  let fixture: ComponentFixture<Program4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Program4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Program4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
