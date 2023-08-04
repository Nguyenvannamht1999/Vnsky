import { Component, OnInit } from '@angular/core';
import { async } from '@firebase/util';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
isSignedIn:boolean = false
constructor(public firebaseService:FirebaseService){}
ngOnInit(){
  if(localStorage.getItem('user')!==null) this.isSignedIn = true
  else this.isSignedIn = false
}
async onSignin(email:string,password:string){
await this.firebaseService.signin(email,password)
if(this.firebaseService.isLoggerIn)
this.isSignedIn = true

}
}
