import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenelementComponent } from './openelement.component';

describe('OpenelementComponent', () => {
  let component: OpenelementComponent;
  let fixture: ComponentFixture<OpenelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
