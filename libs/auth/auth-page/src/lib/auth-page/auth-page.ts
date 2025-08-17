import { AuthService } from '@messager/libs/auth/auth-domain';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-auth-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPage {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  public isVisible = signal<boolean>(false);

  public authForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public onSubmit() {
    if (!this.authForm.valid) return;
    this.authService
      .login(this.authForm.value as { username: string; password: string })
      .subscribe(() => this.router.navigate(['']));
  }

  public onIsVisible() {
    this.isVisible.set(!this.isVisible());
  }
}
