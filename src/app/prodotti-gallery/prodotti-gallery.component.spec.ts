import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottiGalleryComponent } from './prodotti-gallery.component';

describe('ProdottiGalleryComponent', () => {
  let component: ProdottiGalleryComponent;
  let fixture: ComponentFixture<ProdottiGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdottiGalleryComponent]
    });
    fixture = TestBed.createComponent(ProdottiGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
