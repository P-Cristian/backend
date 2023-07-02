import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsuccesComponent } from './loginsucces.component';

describe('LoginsuccesComponent', () => {
  let component: LoginsuccesComponent;
  let fixture: ComponentFixture<LoginsuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginsuccesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginsuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
