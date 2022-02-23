import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZobrazeniClankuComponent } from './zobrazeni-clanku.component';

describe('ZobrazeniClankuComponent', () => {
  let component: ZobrazeniClankuComponent;
  let fixture: ComponentFixture<ZobrazeniClankuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZobrazeniClankuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZobrazeniClankuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
