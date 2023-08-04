import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RecruitmentService } from 'src/app/service/recruitment.service';


@Component({
  selector: 'app-add-recruitment',
  templateUrl: './add-recruitment.component.html',
  styleUrls: ['./add-recruitment.component.scss']
})
export class AddRecruitmentComponent {
  public recruitmentForm:FormGroup
  constructor(
    public recruitmentService: RecruitmentService,
    public formBuilder : FormBuilder,
    public router:Router
  ){
    this.recruitmentForm = this.formBuilder.group({
      job_name:[''],
      company:[''],
      career:[''],
      salary:[''],
      address:[''],
      end_date:[''],
      quantity:[''],
      work_position:[''],
      location:[''],
      work_time:[''],
      job_description:[''],
      job_requirement:[''],
      benefit: [''],
      status:['']
    
      
    })
  }
  ngOnInit(){
  
  }
  onSubmit(){
    this.recruitmentService.createRecruitment(this.recruitmentForm.value);
    this.router.navigate(['admin'])
  }
}
