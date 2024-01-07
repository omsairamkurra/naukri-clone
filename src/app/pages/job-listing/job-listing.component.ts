import { Component } from '@angular/core';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.css',
})
export class JobListingComponent {
  isLoggedIn: boolean = false;
  userInfo: any;
  jobList: any[] = [];

  constructor(private job: JobService) {
    const userData = localStorage.getItem('JobLoginUser');
    if (userData != null) {
      this.userInfo = JSON.parse(userData);
      this.getJobsByEmployer();
    }
  }

  getJobsByEmployer() {
    this.job
      .getJobsByEmployerId(this.userInfo.employerId)
      .subscribe((res: any) => {
        this.jobList = res.data;
      });
  }
}
