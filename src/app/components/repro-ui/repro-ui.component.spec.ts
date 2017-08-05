import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproUiComponent } from './repro-ui.component';

describe('ReproUiComponent', () => {
  let component: ReproUiComponent;
  let fixture: ComponentFixture<ReproUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReproUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReproUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
