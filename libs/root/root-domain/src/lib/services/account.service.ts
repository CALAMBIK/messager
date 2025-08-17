import { Profile } from '@messager/libs/search/search-domain';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private readonly http = inject(HttpClient);

  private baseApiUrl = 'https://icherniakov.ru/yt-course/';

  public getMe(): Observable<Profile> {
    return this.http.get<Profile>(`${this.baseApiUrl}account/me`);
  }
}
