import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  
  backgroundPositionY:any;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.scrollY; 
    const backgroundPosition = -scrollPosition/3  + 'px';
    this.backgroundPositionY = backgroundPosition;
  }
  constructor() { }
  
  
  ngOnInit(): void {

  }

}
