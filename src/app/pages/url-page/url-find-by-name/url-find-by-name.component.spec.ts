import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlFindByNameComponent } from './url-find-by-name.component';

describe('UrlFindByNameComponent', () => {
  let component: UrlFindByNameComponent;
  let fixture: ComponentFixture<UrlFindByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlFindByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlFindByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
