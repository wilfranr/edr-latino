# 🗡️ Elden Ring Companion

Una aplicación web completa para rastrear tu progreso en Elden Ring, incluyendo jefes, misiones, armas y objetos por zona.

## ✨ Características

- **Seguimiento de Progreso**: Marca jefes derrotados, misiones completadas, armas obtenidas y objetos recolectados
- **Organización por Zonas**: Explora las Tierras Intermedias organizadas por dificultad
- **Interfaz Intuitiva**: Diseño moderno con Tailwind CSS y navegación por pestañas
- **Persistencia Local**: Tu progreso se guarda automáticamente en el navegador
- **Datos Completos**: Información detallada de jefes, incluyendo debilidades, fortalezas y recompensas

## 🚀 Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Framework CSS**: Tailwind CSS
- **Fuentes**: Google Fonts (Cinzel, Inter)
- **Datos**: JSON estructurado con información del juego

## 📁 Estructura del Proyecto

```
EDR/
├── data/                    # Archivos de datos del juego
│   ├── bosses.json         # Información de jefes
│   ├── weapons.json        # Armas disponibles
│   ├── items.json          # Objetos del juego
│   ├── locations.json      # Ubicaciones y regiones
│   └── regions_difficulty.json # Dificultad por región
├── index.html              # Aplicación principal
├── manifest.json           # Manifesto PWA
├── sw.js                   # Service Worker
└── README.md               # Este archivo
```

## 🎮 Cómo Usar

1. **Abrir la Aplicación**: Simplemente abre `index.html` en tu navegador
2. **Explorar Zonas**: Navega por las diferentes regiones de las Tierras Intermedias
3. **Marcar Progreso**: Usa los checkboxes para marcar elementos completados
4. **Ver Detalles**: Haz clic en "Ver" para obtener información detallada de jefes
5. **Navegar por Pestañas**: Cambia entre jefes, misiones, armas y objetos en cada zona

## 🔧 Instalación y Desarrollo

### Requisitos
- Navegador web moderno
- Servidor web local (opcional, para desarrollo)

### Instalación Local
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/elden-ring-companion.git
   cd elden-ring-companion
   ```

2. Abre `index.html` en tu navegador o usa un servidor local:
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js
   npx serve .
   
   # Con PHP
   php -S localhost:8000
   ```

3. Navega a `http://localhost:8000`

## 📊 Funcionalidades Principales

### Seguimiento de Progreso
- Barras de progreso visuales por zona
- Progreso general del juego
- Persistencia automática en localStorage

### Información de Jefes
- Estadísticas detalladas (HP, runas, ubicación)
- Debilidades y fortalezas
- Recompensas y drops
- Imágenes de referencia

### Organización por Dificultad
- Zonas ordenadas por nivel de dificultad
- Navegación intuitiva entre pantallas
- Sistema de pestañas organizado

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres mejorar el proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -am 'Añadir nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- Datos del juego proporcionados por la comunidad de Elden Ring
- Inspirado en la experiencia de juego de FromSoftware
- Diseño inspirado en la estética del juego

## 📞 Contacto

Si tienes preguntas o sugerencias, no dudes en abrir un issue en GitHub.

---

**¡Que las Tierras Intermedias te sean propicias, Tarnished!** 🗡️✨
