import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishItemsComponent } from './wish-items.component';

describe('WishItemsComponent', () => {
  let component: WishItemsComponent;
  let fixture: ComponentFixture<WishItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
