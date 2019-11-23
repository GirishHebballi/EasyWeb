import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDisaplyComponent } from './card-disaply.component';

describe('CardDisaplyComponent', () => {
  let component: CardDisaplyComponent;
  let fixture: ComponentFixture<CardDisaplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDisaplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDisaplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
