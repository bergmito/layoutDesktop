import { Component, HostListener } from '@angular/core';
import { Events } from 'ionic-angular';

/**
 * Generated class for the MenuButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-button',
  templateUrl: 'menu-button.html'
})
export class MenuButtonComponent {

  screenSize = window.innerWidth;

  constructor(
    public events: Events
  ) { }

  openMenu() {
    this.events.publish('menuStateChange');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenSize = event.target.innerWidth;    
  } 
  
}
