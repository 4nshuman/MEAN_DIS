import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DISDashboardComponent } from './disdashboard.component';

describe('DISDashboardComponent', () => {
  let component: DISDashboardComponent;
  let fixture: ComponentFixture<DISDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DISDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DISDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
