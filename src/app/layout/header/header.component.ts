import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  currentURL!: string;
  hidden:boolean = true
  constructor(private location: Location,private route: ActivatedRoute) {
    
    
    

  }
  ngOnInit(): void {
    this.currentURL = this.location.path();
    
    
    if(this.currentURL.includes('admin')){
      this.hidden = false
    } 
    else if(this.currentURL.includes('')){
      this.hidden=true
    }
    else{
      this.hidden=true
    }
    console.log(this.hidden);
    
  }
  
}
