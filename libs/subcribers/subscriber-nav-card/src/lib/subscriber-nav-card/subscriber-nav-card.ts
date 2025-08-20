import { AvatarPipe } from '@messager/libs/shared/avatar-pipe';
import { Profile } from '@messager/libs/search/search-domain';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-subscriber-nav-card',
  imports: [CommonModule, AvatarPipe],
  templateUrl: './subscriber-nav-card.html',
  styleUrl: './subscriber-nav-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriberNavCard {
  @Input() subscriber!: Profile;
}
