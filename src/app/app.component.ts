import { Component } from '@angular/core';
import { HeaderComponent } from './componentes/header/header.component';
import { MainlayoutComponent } from './componentes/mainlayout/mainlayout.component';
import { FooterComponent } from './componentes/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainlayoutComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curriculum';

  seccionActiva: string = 'resumen';

  cambiarSeccion(nuevaSeccion: string) {
    this.seccionActiva = nuevaSeccion;
  }
}
