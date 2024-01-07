import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css',
})
export class JobDetailsComponent {
  activeJobId: number = 0;
  jobObj: any;
  userInfo: any;
  isLoggedIn: boolean = false;
  jobApplicationObj = {
    ApplicationId: 0,
    JobId: 0,
    JobSeekerId: 0,
    AppliedDate: new Date(),
    ApplcationStatus: 'New',
  };

  constructor(private activateRoute: ActivatedRoute, private job: JobService) {
    const userData = localStorage.getItem('JobLoginUser');
    if (userData == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.userInfo = JSON.parse(userData);
      this.jobApplicationObj.JobSeekerId = this.userInfo.jobSeekerId;
    }
    this.activateRoute.params.subscribe((res: any) => {
      debugger;
      this.activeJobId = res.jobid;
      this.getJobDetail();
      this.jobApplicationObj.JobId = this.activeJobId;
    });
  }

  getJobDetail() {
    this.job.getJobListingById(this.activeJobId).subscribe((Res: any) => {
      this.jobObj = Res.data;
    });
  }

  apply() {
    this.job
      .sendJobApplication(this.jobApplicationObj)
      .subscribe((res: any) => {
        if (res.result) {
          alert('You Have Successfully Applied to a Job');
        } else {
          alert(res.message);
        }
      });
  }
}
