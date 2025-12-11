import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maincourse } from './maincourse';

describe('Maincourse', () => {
  let component: Maincourse;
  let fixture: ComponentFixture<Maincourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maincourse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maincourse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
