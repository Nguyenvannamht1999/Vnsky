import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecruitmentService } from 'src/app/service/recruitment.service';

@Component({
  selector: 'app-detail-recruitment',
  templateUrl: './detail-recruitment.component.html',
  styleUrls: ['./detail-recruitment.component.scss']
})
export class DetailRecruitmentComponent implements OnInit{
  data:any
  constructor(
    private act: ActivatedRoute,
    public recruitmentService: RecruitmentService,
    
    ){

  }
  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');
  this.recruitmentService.getRecruitmentDoc(id).subscribe((res) => {
    this.data = res;
    console.log(this.data);
    
  });
  }
  
}
