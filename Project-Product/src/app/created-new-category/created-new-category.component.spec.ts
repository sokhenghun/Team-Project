import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedNewCategoryComponent } from './created-new-category.component';

describe('CreatedNewCategoryComponent', () => {
  let component: CreatedNewCategoryComponent;
  let fixture: ComponentFixture<CreatedNewCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedNewCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedNewCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
