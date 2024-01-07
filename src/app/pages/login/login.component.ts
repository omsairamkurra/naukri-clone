import { Component } from '@angular/core';
import { JobService } from '../../service/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    UserName: '',
    Password: '',
  };

  constructor(private loginSer: JobService, private router: Router) {}

  onLogin() {
    this.loginSer.login(this.loginObj).subscribe((res: any) => {
      if (res.result) {
        alert('Login successful');
        localStorage.setItem('JobLoginUser', JSON.stringify(res.data));
        this.router.navigateByUrl('/home');
      } else {
        alert(res.message);
      }
    });
  }
}
