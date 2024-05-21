# NewsApp
## Aplicación de noticias en React Native

La aplicación de noticias en React Native permite a los usuarios ver las últimas noticias conectándose a la API de [newsapi.org](https://newsapi.org/). La aplicación muestra las noticias en una FlatList, con 20 noticias visibles a la vez. Cada noticia se presenta en una tarjeta que incluye información como el título, una descripción, la foto, la fecha de publicación y un botón para abrir la noticia directamente en el sitio web.

**Características:**

- Desarrollado en React Native CLI con TypeScript.
- Utiliza la API de [NewsAPI](https://newsapi.org/) para obtener noticias en tiempo real.
- Muestra las noticias en una FlatList con paginación de 20 noticias a la vez.
- Cada tarjeta de noticia incluye información relevante y un botón para abrir la noticia en el sitio web.

**Capturas de Pantalla:**


![Captura de Pantalla](/newsapp.png)


**Instrucciones para Ejecutar la Aplicación Móvil:**

1. Clona este repositorio.
2. Crea un archivo .env siguiendo el env.example. Para obtener la api key debes ingresar a [newsapi.org](https://newsapi.org/) y seguir las instrucciones.
3. Ejecuta `npm install` en la carpeta raiz  y `pod install` en la carpeta de ios para instalar las dependencias.
4. Ejecuta `npx react-native run-android` o `npx react-native run-ios` para iniciar la aplicación.

**Aplicación Móvil (APK):**

Se incluye un archivo  [APK](/NewsApp.apk) para probar la aplicación móvil en dispositivos Android.

---
