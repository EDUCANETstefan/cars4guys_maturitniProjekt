import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VytvoreniTematuComponent } from './vytvoreni-tematu.component';

describe('VytvoreniTematuComponent', () => {
  let component: VytvoreniTematuComponent;
  let fixture: ComponentFixture<VytvoreniTematuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VytvoreniTematuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VytvoreniTematuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
