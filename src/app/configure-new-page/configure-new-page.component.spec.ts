import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureNewPageComponent } from './configure-new-page.component';

describe('ConfigureNewPageComponent', () => {
  let component: ConfigureNewPageComponent;
  let fixture: ComponentFixture<ConfigureNewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureNewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
