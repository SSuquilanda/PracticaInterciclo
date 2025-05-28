import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <h1>¡Bienvenido a la aplicación distribuida!</h1>
    <div>Mensajes del servidor:</div>
    <ul>
      <li *ngFor="let msg of messages">{{ msg }}</li>
    </ul>
  `
})
export class AppComponent {
  messages: string[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const ws = new WebSocket('ws://localhost:8081');
      ws.onmessage = (event) => {
        this.messages.push(event.data);
      };
    }
  }
}
