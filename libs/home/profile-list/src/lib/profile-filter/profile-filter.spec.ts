import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileFilter } from './profile-filter';

describe('ProfileFilter', () => {
  let component: ProfileFilter;
  let fixture: ComponentFixture<ProfileFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileFilter],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
