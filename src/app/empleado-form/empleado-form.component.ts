import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { EmpleadoService } from '../services/empleado.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-empleado-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.scss']
})
export class EmpleadoFormComponent {
  empleadoForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    position: new FormControl('', [Validators.required]),
    office: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required, Validators.min(0)]),
  });

  constructor(private empleadoService: EmpleadoService, private snackBar: MatSnackBar) {}

  formatCurrency(event: any) {
    const value = event.target.value.replace(/[^0-9]/g, '');
    if (value) {
      event.target.value = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
      }).format(parseInt(value));
    }
  }

  onSubmit() {
    if (this.empleadoForm.valid) {
      this.empleadoService.addEmpleado(this.empleadoForm.value).subscribe({
        next: (response) => {
          this.snackBar.open('Empleado agregado exitosamente', 'Cerrar', {
            duration: 3000,
            panelClass: ['success-snackbar'],
            verticalPosition: 'top'
          });
        },
        error: (error) => {
          this.snackBar.open('Error al agregar empleado', 'Cerrar', {
            duration: 3000,
            panelClass: ['error-snackbar'],
            verticalPosition: 'top'
          });
        },
      });
    } else {
      this.snackBar.open('El formulario no es válido', 'Cerrar', {
        duration: 3000,
        panelClass: ['error-snackbar'],
        verticalPosition: 'top'
      });
    }
  }
}
