# 🗡️ ER Asistente - Guía Completa

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-brightgreen.svg)](https://web.dev/progressive-web-apps/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-blue.svg)](https://wilfranr.github.io/edr-latino/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Tu compañero definitivo para Elden Ring** 🎮

Una aplicación web progresiva (PWA) completa que te guía a través de las Tierras Intermedias con información detallada sobre jefes, armas, objetos, ubicaciones y misiones, **completamente en español latino**.

<!-- Última actualización: 2025 -->

## ✨ Características Principales

### 🎯 **Sistema de Jefes Completo**
- **166 jefes** del juego con información detallada
- **Ordenamiento por dificultad** automático
- **Filtrado por región** para planificar tu ruta
- **Estadísticas completas**: HP, runas, drops
- **Imágenes oficiales** de cada jefe

### 🗺️ **Guía de Regiones**
- **Zonas ordenadas por dificultad** (Limgrave → Caelid → etc.)
- **Consejos específicos** para cada región
- **Progreso visual** del juego
- **Mapeo inteligente** de contenido

### ⚔️ **Catálogo de Equipamiento**
- **Armas** con estadísticas y ubicaciones
- **Objetos** y consumibles del juego
- **Armaduras** y talismanes
- **Información de drops** y crafting

### 📜 **Sistema de Misiones**
- **20+ misiones principales** del juego
- **Pasos detallados** para completarlas
- **Recompensas** de cada misión
- **Organización por región**

### 🌐 **PWA (Progressive Web App)**
- **Instalable** en dispositivos móviles y desktop
- **Funciona offline** con caché inteligente
- **Interfaz nativa** en móviles
- **Notificaciones push** (próximamente)

## 🚀 Cómo Usar

### **Opción 1: Navegador Web**
1. Visita [ER Asistente](https://wilfranr.github.io/edr-latino/)
2. ¡Listo! La aplicación se carga automáticamente

### **Opción 2: Instalar como PWA**
1. Abre la aplicación en Chrome/Edge
2. Haz clic en "Instalar" en la barra de direcciones
3. ¡Disfruta de la experiencia nativa!

### **Opción 3: Desarrollo Local**
```bash
# Clona el repositorio
git clone https://github.com/wilfranr/edr-latino.git

# Navega al directorio
cd edr-latino

# Abre index.html en tu navegador
# O usa un servidor local:
python -m http.server 8000
```

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Framework CSS**: Tailwind CSS
- **PWA**: Service Worker, Manifest, Cache API
- **Datos**: JSON estructurado
- **Fuentes**: Google Fonts (Cinzel, Inter)
- **Deploy**: GitHub Pages + GitHub Actions

## 📱 Compatibilidad

- ✅ **Chrome** 80+ (PWA completa)
- ✅ **Edge** 80+ (PWA completa)
- ✅ **Firefox** 70+ (PWA básica)
- ✅ **Safari** 13+ (PWA básica)
- ✅ **Móviles** iOS 13+ / Android 7+

## 🎮 Contenido del Juego

### **Regiones Disponibles**
- 🟢 **Limgrave** - Fácil (Tutorial)
- 🟡 **Península Llorona** - Fácil
- 🟡 **Liurnia de los Lagos** - Medio
- 🟠 **Caelid** - Difícil
- 🟠 **Meseta de Altus** - Difícil
- 🔴 **Monte Gelmir** - Muy Difícil
- 🔴 **Cumbres de los Gigantes** - Muy Difícil
- ⚫ **Campo de Nieve Consagrado** - Extremo

### **Categorías de Contenido**
- 🗡️ **Jefes**: 166 enemigos únicos
- ⚔️ **Armas**: Espadas, hachas, lanzas, etc.
- 🛡️ **Objetos**: Consumibles, llaves, materiales
- 📜 **Misiones**: Historias y quests del juego
- 🗺️ **Ubicaciones**: Puntos de interés y dungeons

## 🔧 Desarrollo

### **Estructura del Proyecto**
```
edr-latino/
├── index.html          # Aplicación principal
├── manifest.json       # Configuración PWA
├── sw.js              # Service Worker
├── data/              # Datos del juego
│   ├── bosses.json    # Información de jefes
│   ├── weapons_es.json # Armas en español
│   ├── items_es.json  # Objetos en español
│   ├── missions_es.json # Misiones en español
│   └── ...
├── icons/             # Iconos PWA
├── .github/           # GitHub Actions
└── README.md          # Este archivo
```

### **Contribuir**
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📊 Estadísticas del Proyecto

- **Jefes**: 166
- **Armas**: 100+
- **Objetos**: 200+
- **Misiones**: 20+
- **Regiones**: 8
- **Idiomas**: Español Latino
- **Tamaño**: < 5MB

## 🌟 Características Destacadas

### **🎯 Sistema de Dificultad Inteligente**
- Cálculo automático basado en HP y runas
- Ordenamiento visual por nivel de desafío
- Recomendaciones de progresión

### **📱 Experiencia Móvil Optimizada**
- Diseño responsive para todos los dispositivos
- Gestos táctiles intuitivos
- Interfaz adaptativa

### **💾 Caché Inteligente**
- Datos del juego disponibles offline
- Actualizaciones automáticas cuando hay conexión
- Optimización de rendimiento

## 🚀 Roadmap

### **Versión 2.1** (Próximamente)
- [ ] Notificaciones push para eventos del juego
- [ ] Sincronización de progreso entre dispositivos
- [ ] Modo oscuro/claro
- [ ] Búsqueda avanzada

### **Versión 2.2** (Futuro)
- [ ] Calculadora de builds
- [ ] Guías de estrategia para jefes
- [ ] Sistema de logros
- [ ] Comunidad y comentarios

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🙏 Agradecimientos

- **FromSoftware** por crear Elden Ring
- **Comunidad de Elden Ring** por el feedback
- **Contribuidores** que han ayudado con el proyecto
- **GitHub** por proporcionar GitHub Pages

## 📞 Contacto

- **GitHub**: [@wilfranr](https://github.com/wilfranr)
- **Proyecto**: [ER Asistente](https://github.com/wilfranr/edr-latino)
- **Live Demo**: [https://wilfranr.github.io/edr-latino/](https://wilfranr.github.io/edr-latino/)

---

<div align="center">

**¡Que la gracia te guíe, Tarnished!** 🗡️

*ER Asistente - Tu compañero en las Tierras Intermedias*

[![PWA](https://img.shields.io/badge/PWA-Instalar-brightgreen.svg)](https://wilfranr.github.io/edr-latino/)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-black.svg)](https://github.com/wilfranr/edr-latino)

</div>
