import { Component } from '@angular/core';

@Component({
  selector: 'my-vehicles',
  templateUrl: 'app/vehicles/vehicles.component.html',
})
export class VehiclesComponent {
  vehicles = [
    { id: 1, name: 'X-Wing Fighter' },
    { id: 2, name: 'Tie Fighter' },
    { id: 3, name: 'Y-Wing Fighter' }
  ];
}