
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {Recruitment} from '../entities/recruitment.model'
import { Candidate } from '../entities/candidate.model';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environment/environment';

import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL, StorageReference } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class RecruitmentService {
//   private jsonUrl = 'assets/data/jobs.json'

//   constructor(private http : HttpClient) { }
// getData():Observable<any>{
// return this.http.get<any>(this.jsonUrl)
// }

constructor(private angularFirestore: AngularFirestore) { }
  getRecruitmentDoc(id:any){
    return this.angularFirestore.collection('recruitment-collection').doc(id).valueChanges()
  }
  getRecruitmentList(){
    return this.angularFirestore.collection('recruitment-collection').snapshotChanges()

  }
  createRecruitment(recruitment:Recruitment){
    return new Promise<any>((resolve,reject)=>{
      this.angularFirestore.collection('recruitment-collection').add(recruitment).then((res)=>console.log(res)
      )
     
    })
  }
  deleteRecruitment(student:any){
    return this.angularFirestore.collection("recruitment-collection").doc(student.id).delete()
  }
  updateRecruitment(recruitment:Recruitment,id:any){
    return this.angularFirestore.collection('recruitment-collection').doc(id).update({
      job_name:recruitment.job_name,
      company:recruitment.company,
      career:recruitment.career,
      salary:recruitment.salary,
      address:recruitment.address,
      end_date:recruitment.end_date,
      quantity:recruitment.quantity,
      work_position:recruitment.work_position,
      location:recruitment.location,
      work_time:recruitment.work_time,
      job_description:recruitment.job_description,
      job_requirement:recruitment.job_requirement,
      benefit: recruitment.benefit,
      status:recruitment.status,
    })
  }

  createCandidate(candidate:Candidate){
    return new Promise<any>((resolve,reject)=>{
      this.angularFirestore.collection('candidate-collection').add(candidate).then((res)=>console.log(res)
      )
     
    })
  }
  getCandidateList(){
    return this.angularFirestore.collection('candidate-collection').snapshotChanges()
  }
 
}


