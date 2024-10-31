import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedNewProductTemplateComponent } from './created-new-product-template.component';

describe('CreatedNewProductTemplateComponent', () => {
  let component: CreatedNewProductTemplateComponent;
  let fixture: ComponentFixture<CreatedNewProductTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedNewProductTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedNewProductTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
