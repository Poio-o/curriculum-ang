import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-aside',
  imports: [NgOptimizedImage],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  title = 'curriculum';
  textoPie = 'Currículum desarrollado con Angular';
  fecha = new Date();
  nombre = 'Miguel Trujillo Rojas';
  puesto = 'Desarrollador de Aplicaciones Multiplataforma';
  ciudad = 'Málaga';
  telefono = '646018495';
  correo = 'migueltr.2019@outlook.com';
  github = 'https://github.com/Poio-o';
  idiomas = ['Español', 'Inglés', 'Japonés'];
  cualidades = ['Resolución de problemas', 'Trabajo en equipo', 'Capacidad de aprendizaje'];
  tecnologias = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Java',
    'SQL'
  ];
}
