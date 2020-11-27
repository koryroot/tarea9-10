import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFacturasComponent } from './edit-facturas.component';

describe('EditFacturasComponent', () => {
  let component: EditFacturasComponent;
  let fixture: ComponentFixture<EditFacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFacturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
