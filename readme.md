# Popular Seguros Prueba Técnica

<p align="center">
  <img src="/docs/images/logo.png" alt="Popular Seguros" width="200" />
</p>

Este proyecto es una prueba técnica de Popular Seguros, a continuación se estará detallando el uso de la aplicación y respondiendo las preguntas de respuesta corta.

> [!NOTE]
>
> Instalar las dependencias con el comando ``` npm install ```, luego ejecutar el comando ``` npm run dev ``` para iniciar el servidor de desarrollo.

## Tabla de contenido
- [Preguntas](#preguntas)
- [Uso](#uso)

## Preguntas

### ¿Qué es una arquitectura de microservicio y como se diferencia de una arquitectura monolítica?
La arquitectura de microservicios es una arquitectura donde una aplicación se construye como un conjunto de pequeños servicios independientes que se comunican entre sí, generalmente a través de APIs. Cada microservicio se encarga de una funcionalidad específica del sistema y puede ser desarrollado, desplegado y escalado de forma autónoma. Por otra parte, una arquitectura monolítica agrupa todas las funcionalidades de la aplicación en un solo proyecto, donde los componentes están fuertemente acoplados y cualquier cambio o fallo puede afectar a toda la aplicación. La principal diferencia radica en la independencia y flexibilidad que ofrecen los microservicios además de la escalabilidad y la capacidad de adaptación a los cambios en el sistema. a diferencia de los monolitos que están más arraigados y que no pueden escalarse fácilmente.

### Mencione al menos 2 patrones de diseño y explique brevemente
1. Patrón Singleton
Es un patrón de diseño creacional que nos permite asegurarnos de que una clase tenga una única instancia, a la vez que proporciona un punto de acceso global a dicha instancia. Es útil cuando se necesita un solo objeto que coordine acciones en todo el sistema, como un gestor de configuración o una conexión a base de datos. Este patrón restringe la creación de objetos ya que usa un constructor privado y expone un método estático que devuelve la misma instancia cada vez que se llama.

2. Patrón Observer
Este es un patrón de deseño de comportamiento que te permite definir un mecanismo de suscripción para notificar a varios objetos sobre cualquier evento que le suceda al objeto que están observando, de esta manera cuando uno cambia de estado, todos sus dependientes (observadores) son notificados automáticamente. Se suele utilizar en interfaces gráficas donde varios componentes deben reaccionar a un cambio en el estado de otro componente.

### ¿Cuál es la diferencia entre una base de datos relacional y una base de datos no relacional?
La más significativa es en como almacenan y gestionan los datos o información, mientras que las bases de datos relacionales organizan los datos en tablas con filas y columnas que a su vez se pueden relacionar entre sí mediante llaves foráneas. Además utilizan el lenguaje SQL para las consultas. A diferencia de las bases de datos no relacionales, que no requieren de una estructura específica para almacenar los datos y permiten almacenar datos en formatos más flexibles, como documentos JSON o pares clave-valor. Además cada motor tiene su propio lenguaje de consultas.

## Uso
1. **Registro de usuario**

Accedemos a la vista principal, el login, y en ella elegimos la opción de ¡Crear una cuenta!.
<p align="center">
  <img src="/docs/images/img1.png" width="300" alt="Guía de usuario">
</p>

Ingresamos nuestros datos y nos registramos.
<p align="center">
  <img src="/docs/images/img2.png" width="300" alt="Guía de usuario">
</p>

Una vez enviada la solicitud de registro de forma exitosa, nos redirigirá al login, e ingresaremos nuestras credenciales.
<p align="center">
  <img src="/docs/images/img3.png" width="300" alt="Guía de usuario">
</p>


