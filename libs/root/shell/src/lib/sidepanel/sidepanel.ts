import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-sidepanel',
  imports: [CommonModule],
  templateUrl: './sidepanel.html',
  styleUrl: './sidepanel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidepanel {}
