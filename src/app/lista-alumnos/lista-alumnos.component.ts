import { Component } from '@angular/core';

interface Alumno {
  nombre: string;
  apellido: string;
  presente: boolean;
  nota: number;
}

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  alumnos: Alumno[] = [
    { nombre: 'Juan', apellido: 'Pérez', presente: true, nota: 7.01 },
    { nombre: 'María', apellido: 'García', presente: false, nota: 10.00 },
    { nombre: 'Pedro', apellido: 'Martínez', presente: true, nota: 5.00 },
    { nombre: 'Ana', apellido: 'López', presente: true, nota: 8.25 },
    { nombre: 'Carlos', apellido: 'Sánchez', presente: false, nota: 9.00 },
    { nombre: 'Laura', apellido: 'Gómez', presente: true, nota: 6.00 },
    { nombre: 'Luis', apellido: 'Díaz', presente: false, nota: 7.99 },
    { nombre: 'Lucía', apellido: 'Fernández', presente: true, nota: 10.00 },
    { nombre: 'Elena', apellido: 'Ruiz', presente: true, nota: 8.50 },
    { nombre: 'Javier', apellido: 'Morales', presente: false, nota: 9.50 }
  ];
}
