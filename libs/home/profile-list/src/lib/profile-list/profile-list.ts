import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile.model';
import { ProfileCard } from '../profile-card/profile-card';

@Component({
  selector: 'lib-profile-list',
  imports: [CommonModule, ProfileCard],
  templateUrl: './profile-list.html',
  styleUrl: './profile-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileList implements OnInit {
  private readonly profileService = inject(ProfileService);
  public profiles: Profile[] = [];

  ngOnInit(): void {
    this.profileService
      .getTestAccounts()
      .subscribe((value) => (this.profiles = value));
  }
}
