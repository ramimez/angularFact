import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFacturationComponent } from './about-facturation.component';

describe('AboutFacturationComponent', () => {
  let component: AboutFacturationComponent;
  let fixture: ComponentFixture<AboutFacturationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutFacturationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFacturationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
