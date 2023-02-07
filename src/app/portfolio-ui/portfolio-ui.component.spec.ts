import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioUIComponent } from './portfolio-ui.component';

describe('PortfolioUIComponent', () => {
  let component: PortfolioUIComponent;
  let fixture: ComponentFixture<PortfolioUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioUIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
