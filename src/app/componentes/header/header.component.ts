import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  seccionActiva = input<string>('resumen');


  cambiarSeccion = output<string>();

  seleccionar(seccion: string) {
    this.cambiarSeccion.emit(seccion);
  }
}
