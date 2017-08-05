import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproSideNavComponent } from './repro-side-nav.component';

describe('ReproSideNavComponent', () => {
  let component: ReproSideNavComponent;
  let fixture: ComponentFixture<ReproSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReproSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReproSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
