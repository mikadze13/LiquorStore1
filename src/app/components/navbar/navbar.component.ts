import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isNavbarHidden: boolean = false;
  // background:boolean = true
  isNavbarScrolled!: boolean;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > 0 && window.scrollY < 150) {
      this.isNavbarScrolled = false
    } else if (window.scrollY > 149 && window.scrollY < 500) {
      this.isNavbarHidden = true;
      this.isNavbarScrolled = true
    } else {
      this.isNavbarHidden = false;
    }
  }
  constructor() { }
  ngOnInit(): void {

  }
}
