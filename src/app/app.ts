import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SobreMi } from './sobre-mi/sobre-mi';
import { Proyectos } from './proyectos/proyectos';
import { Contacto } from './contacto/contacto';
import { NavbarComponent } from './navbar/navbar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SobreMi,
    Proyectos,
    Contacto
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio-Angular');
}
