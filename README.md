# Proyecto Docker Compose: Angular + Apache + WebSocket

## Cómo ejecutar

1. Construir y levantar los contenedores:

```bash
docker-compose up --build
2.	Acceder a la app Angular en:
arduino
Copy
http://localhost:8080
3.	Verás un mensaje de bienvenida y mensajes que llegan en tiempo real desde el WebSocket en localhost:8081.
Estructura
•	frontend/: contiene el Dockerfile y archivos compilados Angular.
•	websocket-server/: servidor WebSocket Node.js con Dockerfile.
•	docker-compose.yml: orquesta ambos servicios.
