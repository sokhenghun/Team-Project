import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedNewSubCategoryComponent } from './created-new-sub-category.component';

describe('CreatedNewSubCategoryComponent', () => {
  let component: CreatedNewSubCategoryComponent;
  let fixture: ComponentFixture<CreatedNewSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedNewSubCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedNewSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
