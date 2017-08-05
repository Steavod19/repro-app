import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproNavBarComponent } from './repro-nav-bar.component';

describe('ReproNavBarComponent', () => {
  let component: ReproNavBarComponent;
  let fixture: ComponentFixture<ReproNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReproNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReproNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
