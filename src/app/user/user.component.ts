import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']

})
export class UserComponent {
  constructor(private sharedService: SharedService) {}

  onUserButtonClick() {
    // Call the service method to fetch data
    this.sharedService.fetchData().subscribe(
      (data) => {
        // Handle successful response
        console.log('Data from server:', data);
      },
      (error) => {
        // Handle error
        console.error('Error gn v  data:', error);
      }
    );
  }
}
