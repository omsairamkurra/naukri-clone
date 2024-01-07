import { Component, OnInit } from '@angular/core';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-create-new-job',
  templateUrl: './create-new-job.component.html',
  styleUrl: './create-new-job.component.css',
})
export class CreateNewJobComponent implements OnInit {
  jobObj: any = {
    JobId: 0,
    JobName: '',
    CreatedDate: new Date(),
    EmployerId: 0,
    CategoryId: 0,
    Experience: '',
    Package: '',
    Location: '',
    JobDescription: '',
    IsActive: true,
  };
  categoryList: any = ([] = []);

  constructor(private job: JobService) {
    const userData = localStorage.getItem('JobLoginUser');
    if (userData != null) {
      const data = JSON.parse(userData);
      this.jobObj.EmployerId = data.employerId;
    }
  }

  ngOnInit(): void {
    this.getJobCategories();
  }

  getJobCategories() {
    this.job.getAllCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    });
  }

  createJob() {
    this.job.createNewJob(this.jobObj).subscribe((res: any) => {
      if (res.result) {
        alert('Post Created Success');
      } else {
        alert(res.message);
      }
    });
  }
}
