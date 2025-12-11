import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Siders } from './siders';

describe('Siders', () => {
  let component: Siders;
  let fixture: ComponentFixture<Siders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Siders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Siders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
