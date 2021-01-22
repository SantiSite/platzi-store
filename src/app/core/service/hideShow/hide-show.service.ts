import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HideShowService {

  constructor() { }

  hideShowIn(): void {
    const sign = document.querySelector('.sign-in');
    if (sign.classList.contains('is-active')) {
      sign.classList.remove('is-active');
    } else {
      sign.classList.add('is-active');
    }
  }

  hideShowContainerIn(): void {
    const sign = document.querySelector('.container-background');
    if (sign.classList.contains('active')) {
      sign.classList.remove('active');
    } else {
      sign.classList.add('active');
    }
  }

  validationIn(event): void {
    const signInButton = document.querySelector('.sign-in-id-login');
    const signInButtonClose = document.querySelector('.close-id');
    if (event.matches) {
      signInButtonClose.addEventListener('click', this.hideShowIn);
      signInButtonClose.addEventListener('click', this.hideShowContainerIn);
      signInButton.addEventListener('click', this.hideShowIn);
      signInButton.addEventListener('click', this.hideShowContainerIn);
    } else {
      signInButtonClose.removeEventListener('click', this.hideShowIn);
      signInButtonClose.removeEventListener('click', this.hideShowContainerIn);
      signInButton.removeEventListener('click', this.hideShowIn);
      signInButton.removeEventListener('click', this.hideShowContainerIn);
    }
  }

  hideShowUp(): void {
    const sign = document.querySelector('.sign-up');
    if (sign.classList.contains('is-active-up')) {
      sign.classList.remove('is-active-up');
    } else {
      sign.classList.add('is-active-up');
    }
  }

  hideShowContainerUp(): void {
    const sign = document.querySelector('.container-background-up');
    if (sign.classList.contains('active-up')) {
      sign.classList.remove('active-up');
    } else {
      sign.classList.add('active-up');
    }
  }

  validationUp(event): void {
    const signUpButton = document.querySelector('.sign-up-id');
    const signUpButtonClose = document.querySelector('.close-id-up');
    if (event.matches) {
      signUpButtonClose.addEventListener('click', this.hideShowUp);
      signUpButtonClose.addEventListener('click', this.hideShowContainerUp);
      signUpButton.addEventListener('click', this.hideShowUp);
      signUpButton.addEventListener('click', this.hideShowContainerUp);
    } else {
      signUpButtonClose.removeEventListener('click', this.hideShowUp);
      signUpButtonClose.removeEventListener('click', this.hideShowContainerUp);
      signUpButton.removeEventListener('click', this.hideShowUp);
      signUpButton.removeEventListener('click', this.hideShowContainerUp);
    }
  }
}
