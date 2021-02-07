import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressMenuComponent } from './progress-menu.component';

describe('ProgressMenuComponent', () => {
  let component: ProgressMenuComponent;
  let fixture: ComponentFixture<ProgressMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
