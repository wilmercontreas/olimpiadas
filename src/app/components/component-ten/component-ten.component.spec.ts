import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTenComponent } from './component-ten.component';

describe('ComponentTenComponent', () => {
  let component: ComponentTenComponent;
  let fixture: ComponentFixture<ComponentTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
