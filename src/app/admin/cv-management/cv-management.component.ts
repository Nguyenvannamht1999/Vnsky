import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/entities/candidate.model';
import { RecruitmentService } from 'src/app/service/recruitment.service';

@Component({
  selector: 'app-cv-management',
  templateUrl: './cv-management.component.html',
  styleUrls: ['./cv-management.component.scss']
})
export class CVManagementComponent implements OnInit{
  data:any
  Candidate!:Candidate[]
  constructor(private recruitmentService:RecruitmentService){

  }
ngOnInit(): void {
  this.recruitmentService.getCandidateList().subscribe(res=>{
  
     this.Candidate = res.map(e=>{
      return{
        ...e.payload.doc.data() as{}
      } as Candidate;
      
    })
    
  })
  
  
 
  
}
}
