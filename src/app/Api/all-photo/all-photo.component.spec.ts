import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPhotoComponent } from './all-photo.component';

describe('AllPhotoComponent', () => {
  let component: AllPhotoComponent;
  let fixture: ComponentFixture<AllPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
