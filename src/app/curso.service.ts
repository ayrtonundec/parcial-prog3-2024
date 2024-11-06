import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from './curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = 'http://localhost:3000/cursos'; // Ajusta la URL si es necesario

  constructor(private http: HttpClient) {}

  obtenerCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiUrl);
  }
}

