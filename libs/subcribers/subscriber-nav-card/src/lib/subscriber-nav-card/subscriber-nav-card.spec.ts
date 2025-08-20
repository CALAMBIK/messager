import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscriberNavCard } from './subscriber-nav-card';

describe('SubscriberNavCard', () => {
  let component: SubscriberNavCard;
  let fixture: ComponentFixture<SubscriberNavCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriberNavCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SubscriberNavCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
