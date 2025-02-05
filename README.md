
Amigo Secreto
Amigo Secreto es una aplicación web para realizar el sorteo de un amigo secreto entre un grupo de personas. Los usuarios pueden ingresar los nombres de sus amigos y, al hacer clic en un botón, el sistema seleccionará al azar un amigo secreto para cada persona.

Características
Permite ingresar los nombres de los amigos.
Verifica si un nombre ya ha sido añadido para evitar duplicados.
Realiza un sorteo aleatorio para seleccionar un amigo secreto.
Muestra el resultado del sorteo en la pantalla.
Estructura del Proyecto
Archivos
index.html: Contiene la estructura del proyecto, incluyendo la interfaz de usuario.
script.js: Contiene el código JavaScript que maneja la lógica de la aplicación, como la adición de amigos, la verificación de duplicados, y el sorteo aleatorio.
assets/: Carpeta que contiene las imágenes utilizadas en el proyecto, como la imagen de "Amigo Secreto" y el icono de sortear.
Funcionalidad
Entrada de nombres: El usuario puede escribir el nombre de sus amigos en un campo de texto y añadirlos a una lista.
Verificación de duplicados: Antes de agregar un nombre a la lista, el sistema comprueba si ya se encuentra en la lista para evitar duplicados.
Sorteo aleatorio: Al hacer clic en el botón "Sortear amigo", se selecciona un amigo secreto aleatoriamente y se muestra en la interfaz.
Reseteo de lista: Después de realizar el sorteo, la lista de amigos se vacía para permitir un nuevo sorteo si es necesario.
Funciones principales
addFriend(txt): Añade un amigo a la lista, asegurándose de que no haya duplicados.
agregarAmigo(txt): Toma el nombre ingresado por el usuario y lo añade a la lista de amigos, luego actualiza la interfaz.
showFriends(): Muestra la lista de amigos añadidos en la interfaz de usuario.
createRamdom(length): Genera un número aleatorio para seleccionar un amigo secreto de la lista.
sortearAmigo(): Realiza el sorteo aleatorio y muestra el nombre del amigo secreto seleccionado. Si no hay amigos, solicita al usuario que ingrese al menos uno.
Instalación
Clona este repositorio o descarga los archivos.
Abre el archivo index.html en tu navegador para ver y probar la aplicación.
Requisitos
Navegador web moderno (Chrome, Firefox, Safari, Edge, etc.)
Uso
Escribe los nombres de tus amigos en el campo de texto y haz clic en Añadir.
Una vez que hayas ingresado todos los nombres, haz clic en el botón Sortear amigo para seleccionar un amigo secreto al azar.
El nombre del amigo secreto sorteado aparecerá en la lista de resultados.
Después de realizar el sorteo, la lista de amigos se borra automáticamente para poder realizar otro sorteo si lo deseas.
Espero que este README sea útil para tu proyecto. ¡Déjame saber si necesitas algún cambio o ajuste!
