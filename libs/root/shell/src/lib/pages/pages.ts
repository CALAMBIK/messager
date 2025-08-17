import { AccountService } from '@messager/libs/root/root-domain';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
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
export class Pages implements OnInit {
  private readonly accountService = inject(AccountService);

  ngOnInit(): void {
    this.accountService.getMe().subscribe((val) => console.log(val));
  }
}
