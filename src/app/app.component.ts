import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isLoggedIn: boolean = false;
  userInfo: any;

  constructor() {
    const userData = localStorage.getItem('JobLoginUser');
    if (userData == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.userInfo = JSON.parse(userData);
    }
  }

  logOff() {
    localStorage.removeItem('JobLoginUser');
    this.isLoggedIn = false;
  }
}
