import { Component, OnInit } from '@angular/core';
import { RecruitmentService } from '../service/recruitment.service';
import { Recruitment } from '../entities/recruitment.model';
import { ViewportScroller } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { NgForm, NgModelGroup } from '@angular/forms';
import * as AOS from 'aos';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss'],
})
export class RecruitmentComponent implements OnInit {
  upload: boolean = false;
  hidden: boolean = true;
  success: boolean = false;
  fail: boolean = false;

  Recruitment!: Recruitment[];
  public model = {
    name: '',
    email: '',
    phone: '',
    area: '',
    describe: '',
    file: '',
  };
  selectedFile: File | null = null;
  uploadProgress = 0;
  downloadURL: string | null = null;
  uploadCV: FormGroup;
  formData: any = {};
  file: any;
  constructor(
    private recruitmentService: RecruitmentService,
    private storage: AngularFireStorage,
    private router: Router,
    private viewportScroller: ViewportScroller,
    public formBuilder: FormBuilder,
    private angularFirestore: AngularFirestore,
    private titleService: Title
  ) {
    this.uploadCV = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      location: [''],
      describe: [''],
    });
  this.titleService.setTitle('Tuyển dụng VNSKY');

  }

  ngOnInit(): void {
    AOS.init();
    this.recruitmentService.getRecruitmentList().subscribe((res) => {
      
      
      this.Recruitment = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Recruitment;
      })
      
    });
    
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }
  uploadDataWithFileURL(form: NgForm) {
    this.upload = true;
    const storageRef = this.storage.ref(`upload/${this.file.name}`);
    const uploadTask = storageRef.put(this.file);

    uploadTask.then((snapshot) => {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log(downloadURL);

        form.form.value.fileURL = downloadURL;
        this.saveDataToFirestore(form);
      });
    });
  }
  saveDataToFirestore(form: any) {
    this.angularFirestore
      .collection('candidate-collection')
      .add(form.form.value)
      .then(() => {
        this.upload = false;
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 3000);
        this.resetForm(form);
      })
      .catch((error) => {
        this.upload = false;
        this.fail = true;
        setTimeout(() => {
          this.fail = false;
        }, 3000);
      });
  }
  resetForm(form: any) {
    form.resetForm();
    this.file = null;
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
