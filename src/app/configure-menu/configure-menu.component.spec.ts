import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureMenuComponent } from './configure-menu.component';

describe('ConfigureMenuComponent', () => {
  let component: ConfigureMenuComponent;
  let fixture: ComponentFixture<ConfigureMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
