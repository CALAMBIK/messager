import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCard } from '../profile-card/profile-card';
import { Profile, ProfileService } from '@messager/libs/search/search-domain';

@Component({
  selector: 'lib-profile-list',
  imports: [CommonModule, ProfileCard],
  templateUrl: './profile-list.html',
  styleUrl: './profile-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileList implements OnInit {
  private readonly profileService = inject(ProfileService);
  public profiles: WritableSignal<Profile[]> = signal([]);

  ngOnInit(): void {
    this.profileService
      .getTestAccounts()
      .subscribe((value) => this.profiles.set(value));
  }
}
