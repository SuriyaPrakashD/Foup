import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  //standalone: true,
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebUi';
  constructor(private sharedService: SharedService) {}

  onUserButtonClick() {
    console.log('Button clicked');
    // Call the service method to fetch data
    this.sharedService.fetchData().subscribe(
      (data) => {
        // Handle successful response
        console.log('Data from server:', data);
      },
      (error) => {
        // Handle error
        console.error('Error fetching data:', error);
      }
    );
  }

  onMaintenanceButtonClick() {
    console.log('Button clicked');
    // Call the service method to fetch data
    this.sharedService.fetchData().subscribe(
      (data) => {
        // Handle successful response
        console.log('Data from server:', data);
      },
      (error) => {
        // Handle error
        console.error('Error fetching data:', error);
      }
    );
  }
}
