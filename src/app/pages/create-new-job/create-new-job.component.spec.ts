import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewJobComponent } from './create-new-job.component';

describe('CreateNewJobComponent', () => {
  let component: CreateNewJobComponent;
  let fixture: ComponentFixture<CreateNewJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateNewJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateNewJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
