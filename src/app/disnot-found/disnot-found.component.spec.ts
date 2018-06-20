import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DISNotFoundComponent } from './disnot-found.component';

describe('DISNotFoundComponent', () => {
  let component: DISNotFoundComponent;
  let fixture: ComponentFixture<DISNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DISNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DISNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
