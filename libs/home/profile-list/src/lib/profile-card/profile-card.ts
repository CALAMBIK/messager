import { AvatarPipe } from '@messager/libs/avatar-pipe';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'lib-profile-card',
  imports: [CommonModule, AvatarPipe],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileCard {
  @Input() profile!: Profile;
}
