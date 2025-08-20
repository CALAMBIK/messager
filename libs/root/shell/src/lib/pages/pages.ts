import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidepanel } from '../sidepanel/sidepanel';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-pages',
  imports: [CommonModule, Sidepanel, RouterOutlet],
  templateUrl: './pages.html',
  styleUrl: './pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pages {}
