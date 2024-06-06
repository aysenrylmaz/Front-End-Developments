import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchdescripComponent } from './branchdescrip.component';

describe('BranchdescripComponent', () => {
  let component: BranchdescripComponent;
  let fixture: ComponentFixture<BranchdescripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchdescripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchdescripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
