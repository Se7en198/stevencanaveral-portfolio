# CLAUDE.md — Portafolio Steven Cañaveral

## Qué es este proyecto
Portafolio web personal de **Steven Cañaveral**, AI Creative Director basado en Bogotá, Colombia.
Web de una sola página (`index.html`) en HTML/CSS/JS puro — sin frameworks, sin build tools.
El archivo vive en: `C:\Users\LENOVO\Desktop\Seven WEB\index.html`

---

## Stack técnico
- **GSAP 3.12.5** + **ScrollTrigger** — animaciones de scroll (scrub: 0.8)
- **Lenis v1.1.13** — smooth scroll (lerp: 0.085, smoothWheel: true)
- **Google Fonts** — Space Grotesk (títulos) + Inter (cuerpo), carga non-blocking con `media="print"`
- CDNs con `defer` + `onerror` fallback (clase `.gsap-failed` para CSS sin animaciones)
- Sin React, sin Vue, sin bundler — HTML/CSS/JS vanilla

---

## Estructura de la web (secciones en orden)

1. **NAV** — fija, logo "STEVEN CAÑAVERAL" izquierda, links "Trabajo" + botón "Hablemos" derecha
2. **HERO** — pantalla completa con:
   - Roles top-left: Creative Copywriter / AI advertising production / AI Workflow designer
   - Nombre "Steven Cañaveral" posicionado izquierda, debajo de roles, encima de Creatividad
   - Fila inferior: texto gigante "Creatividad" + reel de video + "+ IA" en púrpura
3. **PHRASE SECTION** — frase grande: *"¿Ya sabes qué puedes hacer con IA en tu agencia?"*
4. **STRIP / TRABAJO** — grid de tarjetas de proyectos con hover video/imagen
5. **CTA** — sección "Hablemos"
6. **FOOTER**

---

## Tokens de diseño (`:root`)
```css
--bg: #080808;
--surface: #0f0f0f;
--border: #1c1c1c;
--accent: #7C3AED;        /* púrpura */
--text: #ffffff;
--muted: #666666;
--sub: #888888;
--pad: clamp(24px, 4vw, 64px);
--radius-sm: 6px; --radius-md: 10px; --radius-lg: 20px; --radius-pill: 100px;
```

---

## Videos y archivos de contenido
Los videos están en subcarpetas dentro de `C:\Users\LENOVO\Desktop\Seven WEB\`:
- `Videos musicales IA/Gorillaz/Video Gorillaz.mp4`
- `Videos musicales IA/Little Pretty - Otis Stacks/FINAL NO DÁ MÁS.mp4`
- `Ads/Iusión Ad/Ilusion Ad.mp4`
- ⚠️ `Belleza y salud 30segs editado (1).mp4` pesa **274 MB** — REMOVIDO del reel hero, causa freeze. Hay que comprimir (HandBrake, target 5-20 MB) antes de re-agregar.

---

## Optimizaciones de performance aplicadas
- Videos en reel hero: semaphore pattern (máx 2 cargas concurrentes), `preload="none"` → `preload="metadata"`
- `requestIdleCallback` para iniciar el reel
- `WeakMap` para guardar play promises (no DOM expando)
- `will-change` dinámico: se activa antes de transición, se resetea a `auto` después de 400ms
- `lagSmoothing(500, 33)` en GSAP ticker
- `html { overflow-x: clip }` (no `body overflow hidden` que rompe Lenis)
- GSAP init dentro de `DOMContentLoaded` (evita 16 reflows en parse)
- Modal con CLS fix: mide scrollbar width antes de `overflow:hidden`, aplica como `paddingRight`
- Focus trap en modal con Tab/Shift+Tab cycling

---

## Lo que se ha ajustado de UI (ya aplicado)
- Nav logo: más grande (15px), bold (600), más visible (opacity .82)
- Hero: añadido `<div class="hero-name">Steven Cañaveral</div>` posicionado izquierda, entre roles y "Creatividad"
- Phrase section: texto cambiado a *"¿Ya sabes qué puedes hacer con IA en tu agencia?"* con `<em>IA</em>` en púrpura

---

## Dónde estamos — estado actual
- La web funciona en `http://localhost:3000` (servidor npx serve)
- Animaciones GSAP de scroll funcionando (fade-in, slide-up con scrub)
- Hero reel rotando entre 3 videos
- Grid de proyectos con hover video/imagen funcionando
- Modal de proyectos funcionando con focus trap y CLS fix

---

## Pendientes / próximos pasos

### Prioridad alta
1. **Comprimir videos** — todos los clips deben bajar a 5-20 MB (HandBrake). El de 274 MB hay que comprimirlo antes de re-añadirlo al reel. Esto es lo que más afecta performance.
2. **Scroll animations más elaboradas** — el usuario quiere efectos tipo Zimo Media (zimo-media.com):
   - Sección sticky donde el texto cambia al scrollear
   - Transición de color de fondo entre secciones al scrollear
   - Ticker horizontal de logos/clientes (CSS puro)
   - Reveals escalonados más elaborados

### Prioridad media
3. **Explorar rediseño visual** — el usuario tiene prompts preparados para Google Stitch para probar estilos alternativos. Los 3 estilos candidatos compatibles con su contenido full-color son:
   - Editorial Minimalista
   - Bold Agencia Creativa
   - Tech Futurista Oscuro
4. **Netlify deploy** — cuando los videos estén comprimidos, la web está lista para subir

### Pendiente de decisión del usuario
5. El usuario puede querer más ajustes de UI después de ver el resultado en Stitch
6. Posible adición de sección "Sobre mí" o "Servicios" más elaborada

---

## Contexto de negocio
- Steven es AI Creative Director — usa IA para producción publicitaria
- Sus clientes son agencias de publicidad y marcas en Latinoamérica
- El portafolio debe demostrar que combina creatividad tradicional + IA
- Tono: confiado, profesional, no corporativo — creativo con autoridad
- Referencia visual principal: Juan Mora (scroll animations) + Zimo Media (efectos de sección)

---

## Notas técnicas importantes
- `pointer-events: auto` (no `all` — inválido en HTML)
- Lenis + `scroll-behavior: auto` (no `smooth`, conflictan)
- Google Fonts con `media="print" onload="this.media='all'"` — no bloquea render
- `critique.html` fue eliminado — era un archivo de análisis interno que no debe estar en producción
- El servidor local es `npx serve . --listen 3000`
