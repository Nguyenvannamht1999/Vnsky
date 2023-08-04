import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { ContactComponent } from './contact/contact.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorModule } from 'primeng/paginator';


import { ListRecruitmentComponent } from './admin/list-recruitment/list-recruitment.component';
import { EditRecruitmentComponent } from './admin/edit-recruitment/edit-recruitment.component';
import { AddRecruitmentComponent } from './admin/add-recruitment/add-recruitment.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {environment} from 'src/environment/environment';

import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { DetailRecruitmentComponent } from './admin/detail-recruitment/detail-recruitment.component';
import { RecruitmentDetailComponent } from './recruitment-detail/recruitment-detail.component';
import { UploadComponent } from './upload/upload.component';
import { CVManagementComponent } from './admin/cv-management/cv-management.component';
import { LoginComponent } from './admin/login/login.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    RecruitmentComponent,
    ContactComponent,
    ListRecruitmentComponent,
    EditRecruitmentComponent,
    AddRecruitmentComponent,
    DetailRecruitmentComponent,
    RecruitmentDetailComponent,
    UploadComponent,
    CVManagementComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    BrowserAnimationsModule,
    PaginatorModule,
    AngularFireModule.initializeApp(environment.firebaseConfig) ,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
