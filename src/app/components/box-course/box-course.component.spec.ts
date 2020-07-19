import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCourseComponent } from './box-course.component';

describe('BoxCourseComponent', () => {
  let component: BoxCourseComponent;
  let fixture: ComponentFixture<BoxCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
