import { Component, OnInit } from '@angular/core';

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
export class AppComponent implements OnInit {
  messages: string[] = [];

  ngOnInit() {
    const ws = new WebSocket('ws://localhost:8081');

    ws.onmessage = (event) => {
      this.messages.push(event.data);
    };
  }
}
