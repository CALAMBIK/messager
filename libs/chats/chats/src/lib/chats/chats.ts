import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-chats',
  imports: [CommonModule],
  templateUrl: './chats.html',
  styleUrl: './chats.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Chats {}
