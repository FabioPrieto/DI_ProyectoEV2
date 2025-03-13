### Aplicación de Lista de Tareas - React  

Una aplicación moderna e interactiva de lista de tareas construida con React, con gestión de tareas en tiempo real y capacidades de filtrado.  

### Características  

* Crear nuevas tareas con una interfaz limpia e intuitiva  
* Marcar tareas como completadas con una casilla de verificación personalizada  
* Editar tareas existentes con edición en línea  
* Eliminar tareas que ya no necesites  
* Filtrar tareas para mostrar solo las no completadas  
* Interfaz moderna con transiciones suaves y efectos de hover  
* Diseño responsivo que funciona en todos los dispositivos  

### Requisitos Previos  

* Node.js (v14.0.0 o superior)  
* npm (v6.0.0 o superior)  

### Instalación  

1. Clona el repositorio:  
```bash
git clone [https://github.com/FabioPrieto/DI_ProyectoEV2.git]
cd DI_ProyectoEV2
```  

2. Instala las dependencias:  
```bash
npm install

# Dependencias necesarias
npm install @fortawesome/react-fontawesome
npm install @fortawesome/free-solid-svg-icons
npm install react-icons
```  

### Estructura del Proyecto  

El proyecto consta de varios componentes clave:  

* `App.js`: Componente principal que gestiona el estado de la aplicación  
* `Header.js`: Contiene el título y el toggle de filtrado  
* `FormularioTareas.js`: Componente de formulario para agregar nuevas tareas  
* `ListaTareas.js`: Contenedor para todos los elementos de tarea  
* `Tarea.js`: Componente individual de tarea con funcionalidad de edición/eliminación  
* `App.css`: Estilos para toda la aplicación  

### Funcionalidades Principales  

La aplicación proporciona las siguientes características esenciales:  

1. Gestión de Tareas:  
   * Agregar nuevas tareas  
   * Editar tareas existentes  
   * Eliminar tareas  
   * Marcar tareas como completas/incompletas  

2. Filtrado de Tareas:  
   * Alternar entre mostrar todas las tareas o solo las no completadas  
   * Indicador visual del estado actual del filtro  

3. Interfaz de Usuario:  
   * Diseño personalizado de la casilla de verificación  
   * Edición en línea con soporte para la tecla Enter  
   * Efectos de hover en las tareas  
   * Diseño responsivo  

### Uso  

Para iniciar el servidor de desarrollo:  

```bash
npm start
```  

La aplicación estará disponible en `http://localhost:3000`  

### Estilización  

La aplicación utiliza CSS personalizado con:  

* Flexbox para la gestión del diseño  
* Estilización personalizada de casillas de verificación  
* Principios de diseño responsivo  
* Efectos de sombra para mayor profundidad  
* Estados de hover para mejorar la interacción del usuario  

### Contribución  

1. Haz un fork del repositorio  
2. Crea una rama para tu funcionalidad (`git checkout -b feature/NuevaCaracterística`)  
3. Confirma tus cambios (`git commit -m 'Agregar NuevaCaracterística'`)  
4. Sube la rama (`git push origin feature/NuevaCaracterística`)  
5. Abre un Pull Request  

 