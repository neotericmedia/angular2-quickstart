import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h3>{{story.name}}</h3>
    <h3 [innerText]="story.name"></h3>
    <div [style.color]="color">{{story.name}}</div>
    {{ story | json }}
  `
})

export class AppComponent {
  story = { id: 100, name: 'The Force Awakens' };
  color = 'blue';
}
