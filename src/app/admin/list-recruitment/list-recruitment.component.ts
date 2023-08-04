import { Component, OnInit } from '@angular/core';
import { Recruitment } from 'src/app/entities/recruitment.model';
import { RecruitmentService } from 'src/app/service/recruitment.service';

@Component({
  selector: 'app-list-recruitment',
  templateUrl: './list-recruitment.component.html',
  styleUrls: ['./list-recruitment.component.scss']
})
export class ListRecruitmentComponent implements OnInit {
Recruitment!:Recruitment[];

  constructor(
    private recruitmentService : RecruitmentService
  ){}
  ngOnInit(): void {
  
    this.recruitmentService.getRecruitmentList().subscribe(res=>{
  
      this.Recruitment = res.map(e=>{
        return{
          id:e.payload.doc.id,
          ...e.payload.doc.data() as{}
        } as Recruitment;
      })
    })
  }
  removeStudent(Recruitment:any){
    if(confirm("Are you sure to delete "+ Recruitment.name)){
      this.recruitmentService.deleteRecruitment(Recruitment)
    }
  }
}
