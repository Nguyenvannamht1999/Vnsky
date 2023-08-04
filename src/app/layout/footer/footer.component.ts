import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentURL: string;
  hidden:boolean = true
  constructor(private location: Location) {
    this.currentURL = this.location.path();
    if(this.currentURL.includes('admin')){
      this.hidden = false
    } 
    
    

  }
}
