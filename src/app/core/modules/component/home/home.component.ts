import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('counterElement') counterElement!: ElementRef;

  counter:number = 0;
  timerId: any;
  backgroundPositionY: any;
  // countyear: number = 0;


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const backgroundPosition = -scrollPosition / 3 + 'px';
    this.backgroundPositionY = backgroundPosition;

 
    if (window.scrollY == 0 ) {
      const countyearStop = setInterval(() => {
        this.counter++
        if (this.counter == 115) {
          clearInterval(countyearStop)
        }
      }, 10)
    }
  }

  // onScroll(){
  //   const element = document.getElementById('experience-main')
  //   if (element?.scrollIntoView()) {
  //     const countyearStop = setInterval(() => {
  //       this.countyear++
  //       if (this.countyear == 115) {
  //         clearInterval(countyearStop)
  //       }
  //     }, 10)
  //   }  
  // }
  constructor() { }

  ngOnInit(): void {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.startCounter();
        observer.disconnect();
      }
    });
    observer.observe(this.counterElement.nativeElement);
  }
  startCounter() {
    this.timerId = setInterval(() => {
      if (this.counter > 0) {
        this.counter--;
      } else {
        clearInterval(this.timerId);
      }
    }, 10);
  }
}
