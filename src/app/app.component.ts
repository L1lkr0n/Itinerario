import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Itinerario', url: '/folder/Itinerario', icon: 'add-circle' },
    { title: 'Mapa', url: '/folder/Mapa', icon: 'pin' },
    { title: 'Soporte', url: '/folder/Soporte', icon: 'person' },
    { title: 'Configuración', url: '/folder/Configuración', icon: 'settings' },
  ];
  public labels = ['Créditos', 'Amigos', 'Notas', 'Trabajo', 'Viajes', 'Recordatorios'];
  constructor() {}
}
