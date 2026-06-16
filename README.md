# 🌍 Mundial 2026 - Angular App

![Angular](https://img.shields.io/badge/Angular-16+-red?logo=angular) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?logo=typescript) ![CSS3](https://img.shields.io/badge/CSS3-3.0+-blue?logo=css3)

> Aplicación web desarrollada en Angular sobre la Copa Mundial de Fútbol 2026, implementando Routing para la navegación entre páginas.

---

## 📋 Descripción del Proyecto

Esta aplicación forma parte del **Reto Práctico S13 | AP7** del curso de Angular. El objetivo es demostrar el uso de **Routing en Angular** mediante la creación de una aplicación con múltiples páginas y un sistema de navegación funcional.

La temática elegida es el **Mundial de Fútbol 2026**, donde se muestran:
- Las **48 selecciones participantes**
- La **distribución de los 12 grupos**
- El **calendario completo** de la fase de grupos
- Información de **contacto**

---

## 🚀 Tecnologías Utilizadas

| Tecnología | Descripción |
|------------|-------------|
| ![Angular](https://img.shields.io/badge/Angular-16+-red) | Framework principal |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue) | Lenguaje de programación |
| ![CSS3](https://img.shields.io/badge/CSS3-3.0+-blue) | Estilos y diseño responsive |
| ![HTML5](https://img.shields.io/badge/HTML5-5.0+-orange) | Estructura de la aplicación |
| ![flagcdn](https://img.shields.io/badge/flagcdn-API-green) | Banderas de los países |

---

## 📂 Estructura del Proyecto

```text
mundial-app/
├── src/
│   └── app/
│       ├── pages/
│       │   ├── home/         # Página de Inicio
│       │   ├── equipos/      # Página de Equipos
│       │   ├── grupos/       # Página de Grupos
│       │   ├── partidos/     # Página de Partidos
│       │   └── contacto/     # Página de Contacto
│       ├── app.component.ts  # Componente principal
│       ├── app.module.ts     # Módulo principal
│       └── app-routing.module.ts # Configuración de rutas
├── angular.json
├── package.json
└── README.md
```

---

## 🗺️ Páginas y Funcionalidades

### 🏠 Inicio
- Banner principal con el nombre del proyecto
- Descripción del Mundial 2026
- Datos destacados (48 selecciones, 104 partidos, etc.)
- Vista previa de los 12 grupos con banderas
- Partidos imperdibles de la primera jornada
- Llamada a la acción para navegar a otras páginas

### 🏆 Equipos
- Lista completa de las 48 selecciones
- Filtro por grupo (A-L)
- Banderas de cada país usando `flagcdn.com`

### 📋 Grupos
- Distribución de los 12 grupos del Mundial
- 4 equipos por grupo con sus respectivas banderas
- Diseño en grid responsive

### 📅 Partidos
- Calendario completo de la fase de grupos
- Filtro por jornada (1, 2 y 3)
- Fecha, hora, equipos y sede de cada partido
- Horarios adaptados a la hora de Perú (PET)

### 📧 Contacto
- Información de contacto (teléfono, email, dirección)
- Formulario de contacto funcional
- Redes sociales

---

## 🛠️ Instalación y Ejecución

### Requisitos previos

- Node.js (v16 o superior)
- Angular CLI (v16 o superior)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/mundial-2026-app.git

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
ng serve
```

Abre tu navegador en `http://localhost:4200`

---

## 🗺️ Configuración de Rutas

```typescript
const routes: Routes = [
  { path: '',         component: HomeComponent },
  { path: 'equipos',  component: EquiposComponent },
  { path: 'grupos',   component: GruposComponent },
  { path: 'partidos', component: PartidosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**',       redirectTo: '' }
];
```

---

## 📸 Capturas de Pantalla

| Página | Vista |
|--------|-------|
| 🏠 Inicio | Vista principal con banner y grupos |
| 🏆 Equipos | Lista de 48 selecciones con filtros |
| 📋 Grupos | Grid de los 12 grupos |
| 📅 Partidos | Calendario por jornadas |
| 📧 Contacto | Formulario y datos de contacto |

---

## 👨‍💻 Autor
Sebastian Alejandro Alvarez Tito

---

Desarrollado como parte del **Reto Práctico S13 | AP7** del curso de Angular.

---

## 📄 Licencia

Este proyecto es de uso académico y está desarrollado con fines educativos.