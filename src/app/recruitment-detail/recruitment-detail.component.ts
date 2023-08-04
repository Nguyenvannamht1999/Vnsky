import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecruitmentService } from '../service/recruitment.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm, NgModelGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recruitment-detail',
  templateUrl: './recruitment-detail.component.html',
  styleUrls: ['./recruitment-detail.component.scss'],
})
export class RecruitmentDetailComponent implements OnInit {
  data: any;
  hidden: boolean = true;
  upload: boolean = false;
  success: boolean = false;
  fail: boolean = false;
  id_job:any

  formData: any = {};
  selectedFile: File | null = null;
  uploadProgress = 0;
  downloadURL: string | null = null;
  uploadCV: FormGroup;

  file: any;
  public model = {
    name: '',
    email: '',
    phone: '',
    area: '',
    describe: '',
    file: '',
  };
  constructor(
    public recruitmentService: RecruitmentService,
    private act: ActivatedRoute,
    public formBuilder: FormBuilder,
    private storage: AngularFireStorage,
    private angularFirestore: AngularFirestore,
    private titleService: Title
  ) {
    this.uploadCV = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      location: [''],
      describe: [''],
      job_id: [''],
    });

  }
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.id_job = this.act.snapshot.paramMap.get('id');
    this.recruitmentService.getRecruitmentDoc(this.id_job).subscribe((res) => {
      this.data = res;
      this.titleService.setTitle(this.data.job_name); 
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
}
