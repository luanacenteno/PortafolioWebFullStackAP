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
        backgroundColor: '#F2CB05',
        position: 'absolute'
      })),
      state('open', style({
        height: '100vh',
        width: '100%',
        opacity: 1,
        zIndex: '3',
        backgroundColor: '#F2CB05',
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
  section2 = true;
  section3 = true;
  section4 = true;

  isOpen = false;
  activeUIIndex: any;

  skills: any = [{
    name: "English",
    value: 25
  }, {
    name: "Angular",
    value: 45
  },{
    name: "PHP",
    value: 50
  },{
    name: "JavaScript",
    value: 50
  },{
    name: "Mysql",
    value: 55
  },{
    name: "Css",
    value: 85
  },{
    name: "HTML",
    value: 90
  },{
    name: "Bootstrap",
    value: 70
  },
];


do(){
  const circles = document.querySelectorAll('.circles');
  let j = 0
  circles.forEach(elem =>{
      let dots: any = elem.getAttribute('data-dots');
      console.log('dots', dots);
      let marked = this.skills[j].value;
      console.log('marked', marked);
      var percent = Math.floor(dots*marked/100);
      console.log('percent', percent);
      var rotate = 360/dots;
      var points = "";
      for (let i = 0; i < percent; i++){
        points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
      }
      elem.innerHTML = points;
      j++;
  });
}

  constructor() { 
    
  }
 
  toggle() {
    console.log('toggle clicked', this.isOpen);
    // event.stopPropagation();
    this.isOpen = !this.isOpen;
    this.section2 = true;
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
    setTimeout(() =>{
      this.do();
    })
    // Start after 1 second + 1 second of startDelay
    // setTimeout(() => this.start = true, 1000)
    // setTimeout(()=> this.toggle(), 2000);
  }

}

