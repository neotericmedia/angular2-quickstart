import { Component } from '@angular/core';

@Component({
  selector: 'my-vehicles',
  templateUrl: 'app/vehicles/vehicles.component.html',
})
export class VehiclesComponent {
  vehicles = [
    { id: 1, name: 'Angular2 component 1' },
    { id: 2, name: 'Angular2 component 2' },
    { id: 3, name: 'Angular2 component 3' }
  ];
}
