import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { MainPageContentComponent } from '../main-page-content/main-page-content.component';
import { Router } from '@angular/router';
import { MainPageService } from '../main-page.service';
@Component({
  selector: 'app-main-page-header',
  templateUrl: './main-page-header.component.html',
  styleUrls: ['./main-page-header.component.scss']
})
export class MainPageHeaderComponent {
  constructor( private router: Router, private service: MainPageService)
  {}
  @Output() contentChange = new EventEmitter<string>();

 
  logoColor = "#434f5f"
  showMyModal: boolean = false;
  showModal(){
    if(!this.showMyModal)
    {
      this.showMyModal= true
      this.contentChange.emit();
    }
    else
    {
      this.showMyModal= false
      this.contentChange.emit();
    }
  }
  hideModal(){
    this.showMyModal=false
    this.contentChange.emit();
  }
  mouseOver()
  {
    var svg = document.querySelector('svg.bi'); // Select the SVG element
    if(svg)
    { var ellipses = svg.querySelectorAll('ellipse, circle'); // Select all ellipse and circle elements
  
    ellipses.forEach(function(ellipse) {
    var fill = ellipse.getAttribute('fill'); // Get the fill attribute
    
    if (fill === '#434f5f') {
      ellipse.setAttribute('fill', 'hotpink'); // Change the fill color to pink
    }
    
  });
  }
}
  mouseLeave()
  {
    var svg = document.querySelector('svg.bi'); // Select the SVG element
    if(svg)
    { var ellipses = svg.querySelectorAll('ellipse, circle'); // Select all ellipse and circle elements
  
    ellipses.forEach(function(ellipse) {
    var fill = ellipse.getAttribute('fill'); // Get the fill attribute
    
    if (fill === 'hotpink') {
      ellipse.setAttribute('fill', '#434f5f'); // Change the fill color to pink
    }
    
  });
  }
  }
  redirectToLandingPage() {
    console.log("test")
    this.router.navigate(['/']);
  }
  redirectToRegistrationPage()
  {
    this.router.navigate(['/registration']);
  }
  redirectToLoginPage()
  {
    this.router.navigate(['/login']);
  }
}
