import { Component } from '@angular/core';
import { EmployeesOverlapComponent } from "./employees-overlap/employees-overlap.component";

@Component({
  selector: 'app-root',
  imports: [EmployeesOverlapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dimitar-dimitrov-employees-ui';
}
