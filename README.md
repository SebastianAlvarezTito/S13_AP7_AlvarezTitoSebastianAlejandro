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