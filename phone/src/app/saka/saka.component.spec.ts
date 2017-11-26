import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SakaComponent } from './saka.component';

describe('SakaComponent', () => {
  let component: SakaComponent;
  let fixture: ComponentFixture<SakaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SakaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
