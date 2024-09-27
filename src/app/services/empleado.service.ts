import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private apiUrl = `${environment.apiUrl}/empleados`;

  private http = inject(HttpClient);

  addEmpleado(empleadoData: any): Observable<any> {
    return this.http.post(this.apiUrl, empleadoData);
  }
}
