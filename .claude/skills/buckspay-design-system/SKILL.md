---
name: buckspay-design-system
description: >-
  Sistema de diseño y playbook de rediseño profesional para la landing de BucksPay
  (Next.js 14 + Tailwind v4 + framer-motion + i18n). Úsalo SIEMPRE antes de crear o
  modificar UI de la landing: define tokens (color, tipografía, espaciado, sombras,
  motion), reglas de consistencia, patrones de sección, accesibilidad e i18n, y la
  lista de deuda técnica visual a resolver. Invócalo cuando trabajes en Hero, Services,
  About, Benefits, HowWorks, Testimonials, CallToAction, Contact, Header o Footer.
---

# BucksPay — Design System & Redesign Playbook

Fuente de verdad para llevar la landing de BucksPay a un nivel profesional sin perder
su identidad fintech-cripto. Este documento NO reinventa la marca: la **eleva** y la
hace **consistente**.

> Para inspiración de estilos, paletas y patrones UX puntuales, apóyate también en la
> skill `ui-ux-pro-max:ui-ux-pro-max`. Este documento manda en todo lo que sea
> específico de BucksPay (marca, tokens, contenido, i18n).

---

## 1. Contexto de producto

> Posicionamiento actualizado (jun 2026). Esta landing es la superficie de **marketing**
> (`buckspay.xyz`) de una plataforma más grande. Ver memoria `buckspay-product-context`.

- **Qué es:** plataforma **SaaS Web3 white-label** para que negocios reciban pagos en
  cripto. **No-custodial** (los fondos van directo a la wallet del operador). Multi-cadena.
- **Audiencia (landing):** B2B — negocios/operadores que quieren cobrar en cripto con su
  propia marca. Español + inglés.
- **Tres superficies del producto:** marketing (`buckspay.xyz`, este repo), dashboard de
  operadores (`dashboard.buckspay.xyz`), y páginas de pago white-label por tenant
  (`<tenant>.buckspay.xyz/payments/:uuid`).
- **Valor a comunicar:** páginas de pago con marca blanca, dashboard de gestión, analíticas
  y reportes, soporte multi-red simplificado (EVM: Ethereum/Polygon/Base/Arbitrum + Stellar),
  conexión con MetaMask/WalletConnect/Coinbase, flujos gasless.
- **Tono:** confiable, moderno, técnico-pero-claro. Fintech/infra serio — NO "meme crypto".
- **CTAs:** primario → empezar/registrarse en el dashboard (`dashboard.buckspay.xyz`);
  el viejo `app.buckspay.xyz/` puede seguir como destino hasta confirmar el definitivo.
- **Nota:** el copy actual de la landing asume el framing viejo (cCOP, LATAM, "paga con
  cripto" B2C). Reposicionar hacia infra B2B white-label al rediseñar cada sección —
  confirmar con el usuario antes de reescribir textos existentes.

---

## 2. Principios de diseño

1. **Claridad sobre decoración.** Cada sección comunica un beneficio concreto en < 3s.
2. **Una sola fuente de estilos.** Tailwind v4 es el sistema. CSS Modules solo para casos
   que Tailwind no cubre bien (animaciones keyframe complejas). No mezclar ambos en el
   mismo componente.
3. **Tokens, no valores mágicos.** Nada de `#08070E` suelto repetido en 8 archivos: usar
   las variables del `@theme`.
4. **Dark-first real.** El sitio es dark por diseño. El theming light/dark debe funcionar
   o eliminarse — no dejar un toggle muerto.
5. **i18n siempre.** Ningún texto visible hardcodeado. Toda copy vive en `public/locales/*`.
6. **Movimiento con propósito.** Animaciones sutiles, consistentes y reutilizadas (ver §6).
7. **Accesible por defecto.** Contraste AA, foco visible, `alt`/`aria-label` reales, respeta
   `prefers-reduced-motion`.

---

## 3. Tokens de diseño

Definir como CSS variables dentro de `@theme` en `src/app/globals.css` para que Tailwind v4
genere utilidades (`bg-surface`, `text-brand`, etc.).

### Color

```
/* Marca */
--color-brand-blue:   #2194DB;   /* azul primario */
--color-brand-teal:   #21DBA9;   /* teal/verde acento */
--color-brand-grad:   linear-gradient(135deg, #2194DB 0%, #21DBA9 100%);

/* Superficies (dark-first) */
--color-bg:           #08070E;   /* fondo base de página */
--color-surface-1:    #0E0D17;   /* tarjetas / paneles */
--color-surface-2:    #15131F;   /* tarjetas elevadas / hover */
--color-border:       rgba(255,255,255,0.10);
--color-border-strong:rgba(255,255,255,0.18);

/* Texto */
--color-text:         #FFFFFF;   /* títulos / alto contraste */
--color-text-muted:   #A0A4B8;   /* párrafos / secundario */
--color-text-subtle:  #6B6F82;   /* metadatos / placeholder */

/* Estados */
--color-success:      #21DBA9;
--color-danger:       #FF5C5C;
--color-focus:        #2194DB;
```

Reglas:
- Fondo de sección: `--color-bg`. Tarjetas: `--color-surface-1`, hover `--color-surface-2`.
- Texto de cuerpo: `--color-text-muted` (NO blanco puro para párrafos largos).
- El gradiente de marca se usa en: CTA primario, subrayados/acentos, iconos destacados.
  Úsalo con moderación — máximo 1–2 elementos por viewport.

### Tipografía

- **Font:** Readex Pro (ya cargada). Mantenerla; es legible y soporta español.
- **Escala** (usar utilidades Tailwind, mobile → desktop con `lg:`):

| Rol            | Mobile        | Desktop        | Peso |
|----------------|---------------|----------------|------|
| Display (hero) | `text-4xl`    | `lg:text-6xl`  | 700  |
| H2 sección     | `text-3xl`    | `lg:text-5xl`  | 700  |
| H3 tarjeta     | `text-lg`     | `lg:text-xl`   | 600  |
| Body           | `text-base`   | `lg:text-lg`   | 400  |
| Caption        | `text-sm`     | `text-sm`      | 400  |

- Títulos: `tracking-tight`. Párrafos largos: `leading-relaxed`, `max-w-2xl`/`max-w-3xl`.

### Espaciado y layout

- **Contenedor:** `max-w-7xl mx-auto px-6 lg:px-8`. NO usar `xl:px-80` ni paddings extremos.
- **Ritmo vertical de sección:** `py-20 lg:py-28`.
- **Gap de grids:** `gap-6 lg:gap-8`.
- **Radios:** tarjetas `rounded-2xl`, botones `rounded-xl`, chips `rounded-full`.

### Sombras y glow

- Tarjeta: `shadow-[0_8px_30px_rgba(0,0,0,0.35)]`.
- Glow de marca (solo CTA primario / elemento focal):
  `shadow-[0_0_40px_-10px_rgba(33,219,169,0.45)]`.

---

## 4. Componentes base (patrones canónicos)

### Botón primario (CTA)
```tsx
<a
  href="https://app.buckspay.xyz/"
  className="inline-flex items-center justify-center rounded-xl px-6 py-3
             font-semibold text-[#08070E] bg-gradient-to-r from-[#2194DB] to-[#21DBA9]
             shadow-[0_0_40px_-10px_rgba(33,219,169,0.45)]
             transition-transform hover:scale-[1.03] active:scale-[0.98]
             focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21DBA9]"
>
  {t("cta.start")}
</a>
```
> Texto del botón en color oscuro sobre gradiente claro = mejor contraste que blanco.

### Botón secundario
```tsx
className="rounded-xl px-6 py-3 font-medium text-white border border-white/15
           hover:border-white/30 hover:bg-white/5 transition-colors"
```

### Tarjeta
```tsx
className="rounded-2xl bg-[#0E0D17] border border-white/10 p-6 lg:p-8
           transition-colors hover:bg-[#15131F]"
```

### Eyebrow / etiqueta de sección
```tsx
<span className="text-sm font-semibold uppercase tracking-widest
                 bg-gradient-to-r from-[#2194DB] to-[#21DBA9] bg-clip-text text-transparent">
  {t("section.eyebrow")}
</span>
```

> Cuando se migren los tokens a `@theme`, reemplazar los hex literales por utilidades
> (`bg-surface-1`, `text-brand`, etc.). Hasta entonces, usar SIEMPRE los mismos hex de §3.

---

## 5. Estructura de sección (template)

Cada sección sigue el mismo esqueleto para consistencia:

```tsx
<motion.section id="<id>" className="w-full bg-[#08070E] text-white py-20 lg:py-28"
  initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    {/* Eyebrow + H2 + intro centrados */}
    {/* Contenido: grid de tarjetas / split texto+imagen / carrusel */}
  </div>
</motion.section>
```

Orden actual de la página (mantener salvo decisión explícita):
Hero → Services → About → Benefits → HowWorks → Testimonials → CallToAction → Contact.

---

## 6. Motion (framer-motion)

Centralizar las variantes en `src/utils/motion.ts` y reutilizarlas (hoy están duplicadas
en cada sección). Variantes canónicas:

```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
```

Reglas: `viewport={{ once: true, amount: 0.2 }}`, duración 0.5–0.7s, sin parallax pesado.
Respetar `prefers-reduced-motion` (envolver/condicionar animaciones).

---

## 7. i18n

**Arquitectura (no improvisar — ya resuelta):**
- Config única en `src/i18n.ts`: init **síncrono** (`initImmediate: false`) y
  `react: { useSuspense: false }`. Sin esto, en el primer render `isInitialized` es
  `false` y `t()` devuelve la clave cruda (fue el bug del Hero).
- Se provee con `<I18nProvider>` (`src/providers/I18nProvider.tsx`) montado en el
  `layout.tsx`, por encima de todo. **No** depender de que un componente profundo
  (p. ej. el LanguageSwitcher) importe `i18n.ts` como efecto colateral.
- Namespaces registrados: `landing`, `header`, `footer`. `defaultNS: "landing"`.
- `debug` solo en desarrollo.

**Convención de claves (obligatoria para todo lo nuevo):**
- Usar **claves semánticas anidadas** (`heroSection.titleLead`, `aboutSection.cards.0.title`),
  NUNCA el string en inglés como clave. El patrón viejo `t("Why Buckspay?")` "funciona"
  por accidente (key == texto) pero **no traduce a español** y enmascara fallos de i18n.
- Toda sección debe poblar `es` y `en` para cada clave. Español es el idioma por defecto.
- Textos visibles SIEMPRE vía `t()` + locale files; cero hardcode.

**Deuda pendiente:** migrar a claves semánticas las secciones que aún usan el string como
clave (About, Services, Benefits, HowWorks, Testimonials, CallToAction, Footer). Hacerlo al
rediseñar cada sección.

---

## 8. Accesibilidad (checklist)

- [ ] Contraste texto/fondo ≥ AA (cuidado con texto sobre gradiente).
- [ ] `:focus-visible` visible en todo elemento interactivo.
- [ ] `alt` descriptivo en imágenes informativas; `alt=""` en decorativas.
- [ ] `aria-label` en botones de solo icono (carrusel, hamburguesa, switchers).
- [ ] Jerarquía de headings correcta (un solo `h1` en el Hero).
- [ ] Formulario de contacto: `label` asociada a cada input; errores anunciados.
- [ ] `prefers-reduced-motion` respetado.

---

## 9. Deuda técnica visual a resolver (backlog del rediseño)

Prioridad alta:
1. **Contact invisible:** `Contact.module.css` tiene `.contactSection { display:none }`. Decidir
   si se rediseña y muestra, o se elimina la sección. Hoy está oculta.
2. **Textos hardcodeados:** Benefits, HowWorks, Testimonials, CallToAction, Footer y varios
   títulos no usan i18n. Migrar todo a `public/locales/*`.
3. **Paleta inconsistente:** unificar en los tokens de §3; eliminar variables muertas de
   `globals.css` (bubbles, circles no usados).
4. **Tailwind vs CSS Modules:** elegir Tailwind por componente; borrar los `.module.css`
   obsoletos (Hero, Services, About ya migrados a Tailwind pero conservan módulos muertos).
5. **Dark/Light:** `ThemeSwitcher` está deshabilitado y el Logo renderiza igual en ambos
   modos. O se implementa light real o se elimina el toggle y se asume dark-first.

Prioridad media:
6. Centralizar variantes de framer-motion (§6).
7. Imágenes desde Firebase sin optimizar → usar `next/image` con `sizes`/`priority` correctos.
8. `staticData.ts` es código muerto → eliminar si no se usa.
9. Breakpoints y z-index dispersos → estandarizar.

---

## 10. Cómo trabajar el rediseño (flujo)

1. **Diseñar** la sección con el agente `buckspay-designer` (especificación visual + tokens).
2. **Implementar** con el agente `buckspay-frontend` siguiendo este documento.
3. **Revisar** con `buckspay-design-reviewer` (consistencia, a11y, responsive, i18n).
4. Verificar con `npm run build` y revisión visual en `npm run dev`.

Definition of done de una sección:
- Usa tokens de §3, template de §5 y motion de §6.
- Sin texto hardcodeado (i18n es+en).
- Responsive mobile→desktop, sin valores mágicos.
- Pasa el checklist de a11y (§8).
- `npm run build` en verde.
