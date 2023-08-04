import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  selectedFile: File | null = null;
  uploadProgress = 0;
  downloadURL: string | null = null;

  constructor(
    private storage: AngularFireStorage,
    private router:Router,
    private viewportScroller: ViewportScroller
    ) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    if (!this.selectedFile) return;

    const filePath = `uploads/${Date.now()}_${this.selectedFile.name}`;
    const fileRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, this.selectedFile);

    uploadTask.percentageChanges().subscribe(progress => {
      this.uploadProgress = progress || 0;
    });

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.downloadURL = url;
            this.router.navigateByUrl('/tuyen-dung')
            this.viewportScroller.scrollToPosition([0, 0]);
          });
        })
      )
      .subscribe();
  }
}
