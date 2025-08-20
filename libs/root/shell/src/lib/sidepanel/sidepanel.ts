import { SubscriberNavCard } from '@messager/libs/subscribers/subscriber-nav-card';
import { RouterModule } from '@angular/router';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  Type,
} from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { AccountService } from '@messager/libs/root/root-domain';
import { firstValueFrom } from 'rxjs';

type MenuCategory = {
  icon: string;
  name: string;
  path: string;
  component?: Type<any>;
};

@Component({
  selector: 'lib-sidepanel',
  imports: [CommonModule, RouterModule, AsyncPipe, SubscriberNavCard],
  templateUrl: './sidepanel.html',
  styleUrl: './sidepanel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidepanel implements OnInit {
  private readonly accountService = inject(AccountService);

  public subscribers$ = this.accountService.getSubscribers();

  public me = this.accountService.me;

  public menu: MenuCategory[] = [
    {
      icon: 'assets/imgs/home.png',
      name: 'Моя страница',
      path: 'home',
    },
    {
      icon: 'assets/imgs/chat.png',
      name: 'Чаты',
      path: 'chat',
    },
    {
      icon: 'assets/imgs/lupa.png',
      name: 'Поиск',
      path: 'search',
    },
  ];

  ngOnInit(): void {
    firstValueFrom(this.accountService.getMe());
  }
}
