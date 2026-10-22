import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  nombre = 'Miguel Trujillo Rojas';
  puesto = 'Desarrollador de Aplicaciones Multiplataforma';
  ciudad = 'Málaga';
  telefono = '646018495';
  correo = 'migueltr.2019@outlook.com';
  github = 'https://github.com/Poio-o';
  idiomas = ['Español', 'Inglés', 'Japonés'];
  cualidades = ['Resolución de problemas', 'Trabajo en equipo', 'Capacidad de aprendizaje'];
  
  fotoPerfil = 'img/cara.jpeg';

  mostrarContacto: boolean = true;

  toggleContacto() {
    this.mostrarContacto = !this.mostrarContacto;
  }
}
