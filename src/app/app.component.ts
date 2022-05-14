import { Component, Inject } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      state('closed', style({
        height: '2vh',
        widht: '2%',
        backgroundColor: 'yellow',
        zIndex: '3',
        position: 'absolute'
      })),
      state('open', style({
        height: '100vh',
        width: '100%',
        backgroundColor: 'yellow',
        zIndex: '3',
        position: 'absolute',
      })),
      transition('closed <=> open', [
        animate('1s', )
      ])
    ])
  ]
})

export class AppComponent {
  title = 'portafolio-front';

  isOpen = false;
  activeUIIndex: any;


  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { 
    
  }
 
  toggle() {
    console.log('toggle clicked', this.isOpen);
    // event.stopPropagation();
    this.isOpen = !this.isOpen;
  }
  
  scrollCustomImplementation(element: HTMLElement, index: any) {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: element,
    });
    this.activeUIIndex = index;
    this.toggle();
  }


}

