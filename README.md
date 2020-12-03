# Ucaribe SIPP

## Instalación
Se utiliza [npm](https://docs.npmjs.com/about-npm) para instalar todas las dependencias necesarias declaradas en package.json, para ejecutar el proyecto
```
npm install
```

### Compilar y ejecutar proyecto
Por defecto se ejecuta en el puerto 8080 sobre localhost, con el comando:
```
npm run serve
```

## Estructura de proyecto
Dentro de la carpeta _src/_ se encuentran estas carpetas y archivos.
 * [assets](./src/assets)  Aquí se almacenan las imágenes y logos que se utilizaron.
 * [components](./src/components) Aquí están los componentes creados para utilizar en cada vista o pantalla.
 * [modules](./src/modules) Configuraciones para vuex, para el manejo de states, actions, mutations y getters.
 * [store](./src/store) Se crea el Store donde se almacenarán los datos necesarios como de sesión de usuario, etc.
 * [views](./src/views) Donde se contienen las vistas.
 * [App.vue](./src/App.vue) Componente vue principal donde se montarán las vistas.
 * [main.js](./src/main.js) Archivo principal de JavaScript donde se configura el uso de todo lo anterior.
 * [router.js](./src/router.js) Archivo de configuraciones para las rutas y manejo de rutas dentro de la app.

## Vistas
Dentro de las vistas (además del login), se crearon tres de las cuales se pueden navegar por medio del navbar, que serían:

 * Home.vue - Inicio
 * Students.vue - Estudiantes
 * Projects.vue - Ofertas de proyectos

