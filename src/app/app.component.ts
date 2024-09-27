import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoFormComponent } from './empleado-form/empleado-form.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpleadoFormComponent, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'new-frontend';
}
