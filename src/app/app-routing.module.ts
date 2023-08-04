import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { ContactComponent } from './contact/contact.component';
import { ListRecruitmentComponent } from './admin/list-recruitment/list-recruitment.component';
import { AddRecruitmentComponent } from './admin/add-recruitment/add-recruitment.component';
import { EditRecruitmentComponent } from './admin/edit-recruitment/edit-recruitment.component';
import { DetailRecruitmentComponent } from './admin/detail-recruitment/detail-recruitment.component';
import { RecruitmentDetailComponent } from './recruitment-detail/recruitment-detail.component';
import { CVManagementComponent } from './admin/cv-management/cv-management.component';
import { LoginComponent } from './admin/login/login.component';

const routes: Routes = [
  {
    path: '',
    component : RecruitmentComponent
  },
  {
    path: 'tuyen-dung',
    component : RecruitmentComponent
  },
  {
    path: 'tuyen-dung/:id',
    component : RecruitmentDetailComponent
  },
  {
    path: 'lien-he',
    component : ContactComponent
  },
  {
    path: 'admin',
    component : ListRecruitmentComponent
  },
  {
    path: 'admin/add-recruitment',
    component : AddRecruitmentComponent
  },
  {
    path: 'admin/update-recruitment/:id',
    component : EditRecruitmentComponent
  },
  {
    path: 'admin/detail-recruitment/:id',
    component : DetailRecruitmentComponent
  },
  {
    path: 'admin/cv-requirement',
    component : CVManagementComponent
  }
  ,
  {
    path: 'admin/login',
    component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
