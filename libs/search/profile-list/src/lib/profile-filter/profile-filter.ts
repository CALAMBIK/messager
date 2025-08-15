import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-profile-filter',
  imports: [CommonModule],
  templateUrl: './profile-filter.html',
  styleUrl: './profile-filter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileFilter {}
