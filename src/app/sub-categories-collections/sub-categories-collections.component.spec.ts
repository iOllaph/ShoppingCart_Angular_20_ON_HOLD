import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoriesCollectionsComponent } from './sub-categories-collections.component';

describe('SubCategoriesCollectionsComponent', () => {
  let component: SubCategoriesCollectionsComponent;
  let fixture: ComponentFixture<SubCategoriesCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoriesCollectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCategoriesCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
