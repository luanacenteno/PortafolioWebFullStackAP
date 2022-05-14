import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      state('closed', style({
        height: '100vh',
        width: '100%',
        opacity: 0,
        zIndex: '0',
        backgroundColor: 'yellow',
        position: 'absolute'
      })),
      state('open', style({
        height: '100vh',
        width: '100%',
        opacity: 1,
        zIndex: '3',
        backgroundColor: 'yellow',
        position: 'absolute',
      })),
      transition('closed <=> open', [
        animate('1.5s', )
      ])
    ])
  ]
})

export class AppComponent implements OnInit {
  @ViewChild("sec2") Section2: ElementRef | any;
  title = 'portafolio-front';

  start: boolean = false
  stringInterpolation: string = "Full Stack Web Developer"

  isOpen = false;
  activeUIIndex: any;

  constructor() { 
    
  }
 
  toggle() {
    console.log('toggle clicked', this.isOpen);
    // event.stopPropagation();
    this.isOpen = !this.isOpen;
  }
  
  scrollCustomImplementation(element: HTMLElement, index: any) {
    this.toggle();
    //document.getElementById("section2").scrollIntoView();
    console.log('section2', this.Section2);
    setTimeout(()=> {
      this.Section2.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 2000);
    
  }

  onTypingAnimationComplete () {
    console.log('#TYPING ANIMATION COMPLETE')
    // ...
  }

  ngOnInit () {
    // Start after 1 second + 1 second of startDelay
    // setTimeout(() => this.start = true, 1000)
    // setTimeout(()=> this.toggle(), 2000);
  }

}

