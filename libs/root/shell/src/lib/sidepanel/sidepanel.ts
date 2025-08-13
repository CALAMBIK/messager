import { RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

type MenuCategory = {
  icon: string;
  name: string;
  path: string;
  component?: Type<any>;
};

@Component({
  selector: 'lib-sidepanel',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidepanel.html',
  styleUrl: './sidepanel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidepanel {
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
}
