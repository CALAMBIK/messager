import { AvatarPipe } from '@messager/libs/shared/avatar-pipe';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '@messager/libs/search/search-domain';

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
