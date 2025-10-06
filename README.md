/**
 * @file README.md
 * @brief Documentación oficial del proyecto *vagrant_backend*
 * @author Brayan Casanova / Valentina Tobar / Samuel Zuñiga 
 * @date 2025‑10‑06
 */

# vagrant_backend

## 🎯 Descripción

Este proyecto es el backend que sirve la lógica, almacenamiento y APIs para la aplicación de notas usada por el frontend `vagrant_fronk_docker`.  
Implementa autenticación de usuarios, operaciones CRUD para notas, validaciones, conexión a base de datos, etc.

## 🧰 Tecnologías usadas

- Node.js / Express  
- Base de datos (MongoDB, PostgreSQL o MySQL)  
- ORM / ODM (Sequelize, TypeORM o Mongoose)  
- JWT para autenticación  
- Middleware de validación (Joi o express-validator)  
- Docker para contenerización  
- Variables de entorno (.env) para configuración  

## 📁 Estructura del proyecto

```text
vagrant_backend/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── services/
│   ├── config/
│   ├── index.js (o app.js / server.js)
│   └── utils/
├── tests/ (o __tests__/)
├── Dockerfile
├── docker-compose.yml (opcional)
├── .env
├── package.json
└── README.md
```

- **controllers/**: lógica que responde a las peticiones HTTP  
- **models/**: definiciones de esquema / entidades de base de datos  
- **routes/**: definición de rutas / endpoints  
- **middlewares/**: funciones de middleware (autenticación, validaciones, manejo de errores)  
- **services/**: lógica de negocio separada de controllers  
- **config/**: configuración, conexión a DB, variables de entorno  
- **utils/**: funciones auxiliares  
- **tests/**: pruebas unitarias / de integración  

## 🚀 Instalación y ejecución

### Opción Docker / producción

```bash
# Clonar el repositorio
git clone https://github.com/brayancasanova/vagrant_backend.git
cd vagrant_backend

# Crear archivo .env (si no existe)
# Ejemplo:
# DB_HOST=localhost
# DB_PORT=5432
# DB_USER=usuario
# DB_PASSWORD=contraseña
# JWT_SECRET=tu_secreto

# Construir imagen Docker
docker build -t vagrant-backend .

# Ejecutar contenedor
docker run -p 3000:3000 vagrant-backend
```

Si se usa `docker-compose.yml`, ejecutar:
```bash
docker-compose up --build
```

### Opción local (modo desarrollo)

```bash
npm install
npm run dev  # o npm start
```

Asegúrate de que las variables de entorno estén configuradas correctamente en `.env`.

## 🛠 Características principales

- Registro y autenticación de usuarios (JWT)  
- Middleware para proteger rutas privadas  
- Endpoints CRUD para notas:  
  - `GET /notes`  
  - `POST /notes`  
  - `PUT /notes/:id`  
  - `DELETE /notes/:id`  
- Validación de datos de entrada  
- Manejo centralizado de errores  
- Conexión estable a base de datos  
- Soporte para despliegue mediante Docker  

## 🧩 Arquitectura y diseño

- Separación de capas: **rutas → controladores → servicios → modelos**  
- Middleware de autenticación intercepta peticiones protegidas  
- Validaciones previas a la ejecución de controladores  
- Servicios encapsulan la lógica de negocio (creación, edición, borrado, permisos)  
- Manejo de errores mediante respuestas estructuradas (códigos HTTP claros)  
- Uso de variables de entorno para evitar exponer credenciales sensibles  

## 🤝 Contribuciones

Para contribuir:

1. Haz *fork* del repositorio  
2. Crea una rama: `feature/nueva-funcionalidad`  
3. Realiza tus cambios y verifica que todo funcione  
4. Envía un *pull request* explicando tus modificaciones  

Por favor:  
- Mantén el estilo de código existente  
- Documenta tus funciones / clases nuevas  
- Asegúrate de no romper funcionalidades existentes  

## 👤 Autores / Créditos

- Brayan Casanova   
- Brayan Casanova / Valentina Tobar / Samuel Zuñiga  

## 📄 Licencia

Este proyecto debería tener una licencia (por ejemplo MIT, GPL, etc.). Aquí puedes indicar la licencia elegida.  

