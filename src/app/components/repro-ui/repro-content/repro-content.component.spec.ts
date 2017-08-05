import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproContentComponent } from './repro-content.component';

describe('ReproContentComponent', () => {
  let component: ReproContentComponent;
  let fixture: ComponentFixture<ReproContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReproContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReproContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
