import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;


  constructor() {
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.email,
      // Validators.maxLength(10),
    ]);
    // this.emailField.valueChanges
    //   .subscribe(value => {
    //     console.log(value);
    //   });
  }

  ngOnInit(): void {
  }

  sendEmail(): void {
    if (this.emailField.valid) {
      console.group('Email');
      console.log(this.emailField.value);
      console.groupEnd();
      this.emailField = new FormControl('', [
        Validators.required,
        Validators.email
      ]);
    }
  }

}
