import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCataloguePageComponent } from './manage-catalogue-page.component';

describe('ManageCataloguePageComponent', () => {
  let component: ManageCataloguePageComponent;
  let fixture: ComponentFixture<ManageCataloguePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageCataloguePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageCataloguePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
