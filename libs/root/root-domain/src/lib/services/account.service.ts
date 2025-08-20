import { Profile } from '@messager/libs/search/search-domain';
import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Pageble } from '../models/pageble.model';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private readonly http = inject(HttpClient);

  private baseApiUrl = 'https://icherniakov.ru/yt-course/';

  public me = signal<Profile | null>(null);

  public getMe(): Observable<Profile> {
    return this.http
      .get<Profile>(`${this.baseApiUrl}account/me`)
      .pipe(tap((res) => this.me.set(res)));
  }

  public getSubscribers(): Observable<Profile[]> {
    return this.http
      .get<Pageble<Profile>>(
        `${this.baseApiUrl}account/subscribers/?page=1&size=50`
      )
      .pipe(map((res) => res.items.slice(0, 3)));
  }
}
