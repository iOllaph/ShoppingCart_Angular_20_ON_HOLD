import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestCollectionComponent } from './latest-collection.component';

describe('LatestCollectionComponent', () => {
  let component: LatestCollectionComponent;
  let fixture: ComponentFixture<LatestCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
