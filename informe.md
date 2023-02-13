---
title: Informe de MEGòC
author: Alejandro Antelo
toc: true
---
\newpage

# Cosas hechas

- _Layout_ de la página, responsivo.
- Esquema de colores y estilo de la página.
- Botón para cambiar de tema.
- Sección de navegación diferente en móvil y PC.
- Carrusel.
- Calendario.
- Pie de página con la política de privacidad.

# Cosas por acabar

- Añadir más contenido a las secciones.
- Algún formulario para la inscripción.
- Detalles del estilo de las secciones, como el formato de los `h2`, `h3`...
- Poder cambiar el idioma de la página.
- Hacer que el se escoja automáticamente según la configuración del usuario en su dispositivo, y poder guardar dicha configuración.
- Pequeñas animaciones para hacer más evidente que se está haciendo y en que sección de la página se está.

# Dificultadas encontradas durante el desarrollo

Animar la sección de navegación desplegable junto a su sombreado se ha complicado porque la altura de su elemento padre, que es el que tiene el sombreado, cambia al instante mientras que la de la propia barra no. Se ha tenido que utilizar JavaScript para crear un temporizador para mover la sombra de un elemento a otro al hacer clic sobre el desplegable.

La cabecera, al usar posicionamiento fijo, no ocupa espacio. Eso provoca que el contenido principal sea parcialmente eclipsado por esta. La forma de solucionarlo ha sido definiendo la altura de la cabecera con una variable de CSS y usando dicha variable para definir el tamaño del margen superior del elemento principal.  
Además, al hacer clic en enlaces sucedía lo mismo, lo que se ha arreglado usando la propiedad `scroll-padding-top` en el elemento `:root` y la variable previamente dicha.

Otra cosa que se ha complicado cambiar el tema de la página al vuelo, sin tener que recargar la página. La solución a consistido en crear una variable en `:root` para cada color que fuese a cambiar en la página, y sobreescribir esa variable cuando la clase de este elemento sea 'light'. Después con JavaScript se ha hecho una función simple que añada o quite esta clase de `:root`.

El último de los problemas ha sido el estilo de los botones. Algunos de los botones han de tener un estilo, otros no han de tener ninguno, y otros son enlaces con el estilo de botones. Para conseguirlo se ha aplicado el mismo estilo a los elementos `button` que a los miembros de la clase 'button', y se ha creado una clase nueva para limpiar el estilo por defecto de los botones, llamada 'clear-input'.
