import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidepanel } from '../sidepanel/sidepanel';

@Component({
  selector: 'lib-pages',
  imports: [CommonModule, Sidepanel],
  templateUrl: './pages.html',
  styleUrl: './pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pages {}
