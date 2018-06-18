import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DISLoginComponent } from './dislogin.component';

describe('DISLoginComponent', () => {
  let component: DISLoginComponent;
  let fixture: ComponentFixture<DISLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DISLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DISLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
