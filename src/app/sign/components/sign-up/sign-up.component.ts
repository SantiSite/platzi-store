import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder, AbstractControl} from '@angular/forms';
import { HideShowService } from '../../../core/service/hideShow/hide-show.service';

import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private hideShowService: HideShowService
  ) {
    this.formSignUp();
  }

  ngOnInit(): void {
  }

  private formSignUp(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_password: ['', [Validators.required]]
    }, {validator: this.passwordConfirming});
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirm_password').value) {
      return {invalid: true};
    }
  }

  saveSignUp(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      this.authService.createUser(this.form.value.email, this.form.value.password)
        .then(() => {
          this.hideShowService.hideShowIn(),
          this.hideShowService.hideShowContainerIn();
        });
    }
    this.form.reset();
  }

  hideShow(): void {
    this.hideShowService.hideShowUp();
  }

  hideShowContainer(): void {
    this.hideShowService.hideShowContainerUp();
  }

  validation(event): void {
    this.hideShowService.validationUp(event);
  }
}
