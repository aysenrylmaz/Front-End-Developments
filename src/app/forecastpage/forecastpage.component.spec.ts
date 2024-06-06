import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastpageComponent } from './forecastpage.component';

describe('ForecastpageComponent', () => {
  let component: ForecastpageComponent;
  let fixture: ComponentFixture<ForecastpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
