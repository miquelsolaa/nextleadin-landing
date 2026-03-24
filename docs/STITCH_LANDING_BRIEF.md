# Brief per Google Stitch – Landing NextLeadIn (conversió)

Aquest document és el **prompt/brief** que pots copiar i enganxar a [stitch.withgoogle.com](https://stitch.withgoogle.com) per generar un disseny de landing optimitzat per conversió, inspirat en SaaS referents (Linear, Vercel, Stripe, Hunter.io, Apollo.io) i amb la guia de colors actual de NextLeadIn.

---

## Prompt per Stitch (còpia i enganxa)

```
Diseña una landing page de conversión para NextLeadIn, un SaaS B2B de prospección comercial que ofrece leads de negocios locales (restaurantes, gimnasios, clínicas, etc.) con contexto IA. La audiencia son equipos comerciales y SDRs.

GUÍA DE COLORES (OBLIGATORIA):
- Primary: #00CC61 (verde, CTAs principales)
- Secondary: #004050 (azul oscuro, fondos de sección, headers)
- Text: #000000
- Accent suave: #DFF9EB (verde muy claro, highlights)
- Fondo claro: #F4F4F4

ESTILO: Inspirado en Linear, Vercel, Stripe, Hunter.io. Diseño limpio, mucho whitespace, tipografía distintiva (evitar Inter), gradientes sutiles. Sin aspecto genérico de IA.

ESTRUCTURA (orden sugerido):

1. HERO
   - Badge pequeño: "7 días gratis · Sin tarjeta"
   - Headline: "Leads de [restaurantes, gimnasios, clínicas] que LinkedIn no tiene"
   - Subheadline corto con números: "8h/semana ahorradas. 3x más reuniones. 15x ROI medio."
   - Formulario minimalista: email + CTA "Ver leads de mi zona"
   - Trust: "7 días gratis" + "ROI 15x"
   - Hero visual: mockup del dashboard o listado de leads (placeholder)

2. LOGOS / TRUSTED BY
   - Banda de logos de clientes en escala de grises, color al hover
   - O métricas: "25K+ leads" | "8+ reuniones/mes" | "15% contacto efectivo"

3. FEATURES (layout variado, no siempre 3 columnas)
   - Alternar: 2+1, feature a izquierda + imagen a derecha
   - Cards con iconos, títulos cortos, descripciones con números concretos
   - Ejemplos: "Ahorra 8h/semana", "Triplica tu tasa de contacto", "Cierra 3x más reuniones"

4. TESTIMONIAL inline
   - Un testimonial destacado con foto, nombre, cargo, empresa y cita concreta
   - Diseño tipo Hunter.io: integrado con el flujo, no aislado

5. CTA FINAL
   - Fondo #004050 (secondary)
   - Headline: "Listo para cerrar 3x más reuniones este mes?"
   - 2 botones: primario verde (#00CC61), secundario outline blanco
   - Imagen del producto a la derecha

CTA: Botones primarios siempre #00CC61, hover más oscuro. Secundarios: borde, fondo transparente.
Evitar: Inter como font, "revoluciona", "transforma", "cutting-edge", layouts simétricos repetitivos.
```

---

## Guia de colors (referència ràpida)

| Variable | Hex | Uso |
|----------|-----|-----|
| Primary | `#00CC61` | CTAs, links, highlights |
| Secondary | `#004050` | Fons de seccions, header |
| Accent | `#DFF9EB` | Fons suaus, badges |
| Light | `#F4F4F4` | Fons alternatius |
| Text | `#000000` | Text principal |

---

## Referències SaaS (per al dissenyador / Stitch)

- **Linear**: minimalisme, espai en blanc, tipografia Geist
- **Vercel**: gradients suaus, seccions fosques/clares
- **Stripe**: il·lustracions geomètriques, copy clar
- **Hunter.io**: testimonials integrats, números concrets
- **Apollo.io**: hero amb CTA prominent, trust metrics visibles

---

## Integració amb el codi existent

Quan tinguis el disseny de Stitch:

1. Exporta el codi HTML/CSS que Stitch ofereix
2. Adapta els components React existents (`HeroSection`, `CTASection`, etc.) al nou layout
3. Mantén les variables CSS de `app/globals.css` per consistència
