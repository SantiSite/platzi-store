import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HideShowService } from '../../../core/service/hideShow/hide-show.service';
import { AuthService } from '../../../core/service/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private hideShowService: HideShowService,
    private authService: AuthService,
    private router: Router
  ) {
    this.formSignIn();
  }

  ngOnInit(): void {
  }

  private formSignIn(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  saveSignIn(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      this.authService.login(this.form.value.email, this.form.value.password)
        .then(() => {
          this.router.navigate(['/admin']);
        }, () => {
          alert('El email o la password no coinciden');
        });
    }
    this.form.reset();
  }

  hideShow(): void {
    this.hideShowService.hideShowIn();
  }

  hideShowContainer(): void {
    this.hideShowService.hideShowContainerIn();
  }

  validation(event): void {
    this.hideShowService.validationIn(event);
  }
}
