# Stay

Pendiente de documentar la puesta en marcha y diseño de la aplicación.

```bash

  # elegir ExpoGo para no tener que compilarla y usar ExpoGo para probar la app
  bun start

```

## Estructura de carpetas

- _@/app_ -> las rutas de la app (navegación)
- _@/components_ -> los assets de la app (imágenes, fuentes, etc)
- _@/assets_ -> los assets de la app (imágenes, fuentes, etc)
- _@/hooks_ -> los hooks personalizados
- _@/screens_ -> las pantallas de la app
- _@/utils_ -> las funciones de utilidades globales

### @/app -> rutas

Las rutas deben simplemente llamar a Screens y pasar los props que necesite.
Pueden hacer tener la lógica de navegación y autenticación pero no de diseño,
esa es la parte de Screens.

### @/screens

Las pantallas de la app -> deben funcionar por si mismas, dependiendo de los
parámetros que reciban

### @/components

Los componentes a medida para esta app

### @/hooks -> custom hooks

Hooks personalizados para esta app

### @/utils -> utiliza

Utilidades globales para ser usados dentro de screens, componentes y hooks
