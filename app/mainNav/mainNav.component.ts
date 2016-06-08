import { Component } from '@angular/core';

@Component({
  selector: 'main-nav',
  templateUrl: 'app/mainNav/mainNav.component.html',
})
export class MainNavComponent {
  nav = [
    { id: 1, url: '#about', name: 'Technology' },
    { id: 2, url: '#download', name: 'Events' },
    { id: 3, url: '#contact', name: 'Partners' },
    { id: 4, url: '#contact', name: 'Aviva Digital Global' },
    { id: 5, url: '#contact', name: 'Careers' },
    { id: 6, url: '#contact', name: 'Social Media' },
    { id: 7, url: '#contact', name: 'Contact Us' }
  ];
}
