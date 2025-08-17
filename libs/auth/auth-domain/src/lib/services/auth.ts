import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthLogin } from '../models/auth.model';
import { CookieService } from 'ngx-cookie-service';
import { catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);

  private readonly cookieService = inject(CookieService);

  private readonly router = inject(Router);

  private baseApiUrl = 'https://icherniakov.ru/yt-course/';

  public token: string | null = null;
  public refreshToken: string | null = null;

  get isAuth() {
    if (!this.token) {
      this.token = this.cookieService.get('token');
      this.refreshToken = this.cookieService.get('refreshToken');
    }
    return !!this.token;
  }

  public login(payload: { username: string; password: string }) {
    const fd = new FormData();
    fd.append('username', payload.username);
    fd.append('password', payload.password);
    return this.http.post<AuthLogin>(`${this.baseApiUrl}auth/token`, fd).pipe(
      tap((res) => {
        this.token = res.access_token;
        this.refreshToken = res.refresh_token;

        this.cookieService.set('token', this.token);
        this.cookieService.set('refreshToken', this.refreshToken);
      })
    );
  }

  public refresh() {
    return this.http
      .post<AuthLogin>(`${this.baseApiUrl}auth/refresh`, {
        refresh_token: this.refreshToken,
      })
      .pipe(
        tap((res) => {
          this.token = res.access_token;
          this.refreshToken = res.refresh_token;

          this.cookieService.set('token', this.token);
          this.cookieService.set('refreshToken', this.refreshToken);
        }),
        catchError((err) => {
          this.logout();
          return throwError(err);
        })
      );
  }

  public logout() {
    this.token = null;
    this.refreshToken = null;
    this.cookieService.delete('token');
    this.cookieService.delete('refreshToken');
    this.http.post(`${this.baseApiUrl}auth/logout`, null);
    this.router.navigate(['login']);
  }
}
