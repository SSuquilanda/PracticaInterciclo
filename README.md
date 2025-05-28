# Proyecto Docker Compose: Angular + Apache + WebSocket

### Nombre: Samantha Suquilanda
### Materia: Sistemas Distribuidos


## Cómo ejecutar

1. Construir y levantar los contenedores:

```bash
docker-compose up --build
2.	Acceder a la app Angular en:

http://localhost:8080

3. Estructura
•	frontend/: contiene el Dockerfile y archivos compilados Angular.
•	websocket-server/: servidor WebSocket Node.js con Dockerfile.
•	docker-compose.yml: orquesta ambos servicios.

4. Link del repositorio de Git: https://github.com/SSuquilanda/PracticaInterciclo.git

5. Link de las imagenes en DockerHub:

websocket-server: https://hub.docker.com/r/ssuquilanda/websocket-server
frontend: https://hub.docker.com/repository/docker/ssuquilanda/frontend/general