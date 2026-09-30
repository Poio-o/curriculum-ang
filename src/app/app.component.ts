import { compileDeferResolverFunction } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage, DatePipe } from '@angular/common';
import { FooterComponent } from './componentes/footer/footer.component';
import { MainlayoutComponent } from './componentes/mainlayout/mainlayout.component';

@Component({
  selector: 'app-root',
  imports: [NgOptimizedImage, DatePipe, FooterComponent, MainlayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
