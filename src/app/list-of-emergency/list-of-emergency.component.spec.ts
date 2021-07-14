import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfEmergencyComponent } from './list-of-emergency.component';

describe('ListOfEmergencyComponent', () => {
  let component: ListOfEmergencyComponent;
  let fixture: ComponentFixture<ListOfEmergencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfEmergencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfEmergencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
