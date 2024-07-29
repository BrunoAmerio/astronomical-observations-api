# README.MD

La API de Observaciones Astronómicas es una API RESTful construida con Node.js y Express. Esta API proporciona endpoints para manejar observaciones astronómicas, con autenticación basada en JWT y otras características como la gestión de usuarios, seguridad con bcrypt y validación de datos.

Se trabajó siguiendo los standares de https://www.conventionalcommits.org/en/v1.0.0/ para los commits.

Organizar las carpetas en un proyecto Backend es crucial para mantener un código limpio, modular y fácil de mantener. Para este proyecto en especifico opté por la organización por Dominios o Características.
En proyectos más grandes, es útil organizar las carpetas por dominios o características. Esto agrupa todos los archivos relacionados con una característica específica en un solo lugar.

Por lo que si este proyecto necesita escalar, lo hará sin complicaciónes.

## Tabla de Contenidos

- [Dependencias](#dependencias)
- [Instalación](#instalación)
- [Uso](#uso)

### DEPENDENCIAS

Estas son las siguientes dependencias con las que se creó el proyecto:

- **`express`**: Framework para la creación del servidor.
- **`express-jwt`**: Se usa para verificar la validez del token JWT en las solicitudes entrantes.
- **`jsonwebtoken`**: Se usa para firmar y verificar tokens JWT.
- **`bcrypt`**: Para la encriptación de las contraseñas.
- **`joi`**: Para la validación de los datos en las rutas.
- **`@prisma/client`**: Cliente de Prisma para interactuar con la base de datos.
- **`prisma`** ORM para interactuar con la base de datos
- **`husky`** Herramienta para gestionar y automatizar commits.

### INSTALACIÓN

1. Clona el repositorio

```bash
git clone https://github.com/BrunoAmerio/astronomical-observations-api.git
cd astronomical-observations-api
```

2. Instala las dependencias con el siguiente comando

```bash
npm install
```

3. En un archivo .env debes declarar las siguientes variables para el correcto funcionamiento del servidor.

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
PORT=3000
JWT_SECRET=
```

> **Tip:** Para generar el secret de JWT es recomendable usar una cadena de texto de 128bits totalmente aleatoria. Dejo un enlace a una página para generar dicho SECRET: https://jwt-keys.21no.de/

4. Utiliza el siguiente comando para generar las tablas en la base de datos:

```bash
npx prisma migrate dev --name init
```

### USO

Para levantar el servidor basta con ejecutar el comando:

```bash
npm run api
```
