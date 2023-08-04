import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecruitmentService } from 'src/app/service/recruitment.service';

@Component({
  selector: 'app-edit-recruitment',
  templateUrl: './edit-recruitment.component.html',
  styleUrls: ['./edit-recruitment.component.scss']
})
export class EditRecruitmentComponent implements OnInit{
  public editForm:FormGroup;
  recruitmentRef:any
  constructor( 
    public recruitmentService:RecruitmentService,
    public formBuilder:FormBuilder,
    private act : ActivatedRoute,
    private router : Router
  ){
  this.editForm = this.formBuilder.group({
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
  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');
  
    this.recruitmentService.getRecruitmentDoc(id).subscribe(res=>{
      this.recruitmentRef=res;
      this.editForm = this.formBuilder.group({
        job_name:[this.recruitmentRef.job_name],
        company:[this.recruitmentRef.company],
        career:[this.recruitmentRef.career],
        salary:[this.recruitmentRef.salary],
        address:[this.recruitmentRef.address],
        end_date:[this.recruitmentRef.end_date],
        quantity:[this.recruitmentRef.quantity],
        work_position:[this.recruitmentRef.work_position],
        location:[this.recruitmentRef.location],
        work_time:[this.recruitmentRef.work_time],
        job_description:[this.recruitmentRef.job_description],
        job_requirement:[this.recruitmentRef.job_requirement],
        benefit:[this.recruitmentRef.benefit],
        status:[this.recruitmentRef.status]

      })
    })
  

  }
  onSubmit(){
    const id = this.act.snapshot.paramMap.get('id');
  
    this.recruitmentService.updateRecruitment(this.editForm.value,id);
    this.router.navigate(['admin'])
  }
}
