import { Component, input } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  seccion = input<string>('resumen');

  experiencias: Experiencia[] = [
    {
      id: 1,
      empresa: 'Business as an Art',
      puesto: 'Investigación de IA y Desarrollo Web',
      periodo: '3 meses',
      descripcion: 'Investigación aplicada de modelos de Inteligencia Artificial y diseño/implementación de páginas web accesibles y responsivas.',
      logo: 'img/baart.png'
    },
    {
      id: 2,
      empresa: 'LDQuantum',
      puesto: 'Gestión de errores y Soporte Web',
      periodo: '3 meses',
      descripcion: 'Gestión y resolución de incidencias en producción, depuración de errores y diseño frontend de plataformas corporativas.',
      logo: 'img/ldquantum.webp'
    }
  ];

  private experienciasOriginal: Experiencia[] = [...this.experiencias];

  formaciones: Formacion[] = [
    {
      id: 1,
      titulo: 'Desarrollo de Aplicaciones Multiplataforma',
      centro: 'CPIFP Alan Turing',
      periodo: '2 años',
      logo: 'img/alanturing.jpeg'
    },
    {
      id: 2,
      titulo: 'Sistemas Microinformáticos y Redes',
      centro: 'CPIFP Alan Turing',
      periodo: '2 años',
      logo: 'img/alanturing.jpeg'
    }
  ];

  tecnologias: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Java',
    'PostgreSQL',
    'SQL',
    'Git'
  ];


  tecnologiaSeleccionada: string | null = null;


  seleccionarTecnologia(tec: string) {
    this.tecnologiaSeleccionada = tec;
  }

  limpiarSeleccionTecnologia() {
    this.tecnologiaSeleccionada = null;
  }

  vaciarExperiencias() {
    this.experiencias = [];
  }

  restaurarExperiencias() {
    this.experiencias = [...this.experienciasOriginal];
  }
}

export interface Experiencia {
  id: number;
  empresa: string;
  puesto: string;
  periodo: string;
  descripcion: string;
  logo: string;
}

export interface Formacion {
  id: number;
  titulo: string;
  centro: string;
  periodo: string;
  logo: string;
}