import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickdropComponent } from './clickdrop.component';

describe('ClickdropComponent', () => {
  let component: ClickdropComponent;
  let fixture: ComponentFixture<ClickdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
