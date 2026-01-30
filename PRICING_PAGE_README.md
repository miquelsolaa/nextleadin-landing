# Pàgina de Preus - Sierra CRM

## Descripció
Aquesta és una pàgina de preus completa i moderna per a la plataforma Sierra CRM, basada en el disseny de la pàgina de CRM original. La pàgina inclou tots els elements necessaris per a una experiència de preus professional i atractiva.

## Components Creats

### 1. PricingCard.tsx
- **Ubicació**: `components/PricingCard.tsx`
- **Funció**: Renderitza targetes individuals de preus amb disseny modern
- **Característiques**:
  - Suport per a plans populars amb badge destacat
  - Animacions amb delays personalitzables
  - Disseny responsive
  - Hover effects i transicions

### 2. PricingComparisonTable.tsx
- **Ubicació**: `components/PricingComparisonTable.tsx`
- **Funció**: Taula de comparació detallada entre plans
- **Característiques**:
  - Comparació visual de característiques
  - Suport per a valors booleans i text
  - Botons d'acció per a cada pla
  - Disseny alternat per a millor llegibilitat

### 3. FAQSection.tsx
- **Ubicació**: `components/FAQSection.tsx`
- **Funció**: Secció de preguntes freqüents amb acordió expandible
- **Característiques**:
  - Acordió interactiu amb animacions
  - Estat local per a expandir/contreure
  - Disseny responsive i accessible

## Pàgina Principal

### Ubicació
`app/pricing/page.tsx`

### Estructura
1. **Hero Section**: Títol principal, prova gratuïta i nota de facturació
2. **Breadcrumb**: Navegació de mig de pa
3. **Pricing Cards**: Tres plans de preus (Growth, Premium, Ultimate)
4. **Comparison Table**: Taula detallada de comparació
5. **Add-ons Section**: Complements per ampliar funcionalitats
6. **FAQ Section**: Preguntes freqüents
7. **CTA Section**: Call-to-action final

### Dades dels Plans
- **Growth**: €39/seient/mes - Automatitzacions i seguiment
- **Premium**: €59/seient/mes - Cicle complet de vendes (PLA POPULAR)
- **Ultimate**: €79/seient/mes - Seguretat i suport ampliat

## Característiques Tècniques

### Tecnologies Utilitzades
- Next.js 14 amb App Router
- TypeScript per a tipus segurs
- Tailwind CSS per a estils
- Components React reutilitzables

### Responsive Design
- Disseny mobile-first
- Grid layouts adaptatius
- Breakpoints optimitzats per a tots els dispositius

### Accessibilitat
- Semàntica HTML correcta
- Navegació per teclat
- Contrast de colors adequat
- Text alternatiu per a imatges

## Com Utilitzar

### 1. Navegació
La pàgina és accessible des del header principal via el link "Pricing"

### 2. Personalització
Per modificar els preus o característiques, edita les dades en `lib/pricing-data.ts`:

```typescript
const pricingPlans = [
  {
    id: 'nou-pla',
    name: { ca: 'Nou Pla', es: 'Nuevo Plan', en: 'New Plan' },
    price: 29,
    period: { ca: 'seient/mes', es: 'puesto/mes', en: 'seat/month' },
    features: { ca: ['Característica 1'], es: ['Característica 1'], en: ['Feature 1'] },
    // ... altres propietats
  }
]
```

### 3. Afegir Nous Plans
Per afegir més plans, simplement afegeix elements a l'array `pricingPlans` i actualitza la taula de comparació.

### 4. Modificar Estils
Els estils es poden personalitzar via:
- Classes de Tailwind CSS
- Variables CSS personalitzades en `globals.css`
- Mòduls CSS específics

## SEO i Meta Dades

### Meta Tags
- Títol optimitzat per a preus
- Descripció específica de la pàgina
- Paraules clau relacionades amb preus CRM
- Open Graph tags per a xarxes socials

### Estructura
- Headings jeràrquics correctes (H1, H2, H3)
- Breadcrumbs per a navegació
- URLs amigables per a SEO

## Imatges i Recursos

### Imatges Utilitzades
- Mockup CRM per a la secció CTA
- Formes decoratives de fons
- Totes les imatges són optimitzades i responsive

### Optimització
- Imatges lazy-loaded
- Formats moderns (WebP suportat)
- Alt text descriptiu

## Manteniment

### Actualitzacions Regulars
- Revisar preus mensualment
- Actualitzar característiques segons el producte
- Mantenir FAQ actualitzades

### Monitoratge
- Verificar enllaços funcionals
- Testejar formularis de contacte
- Validar responsive design

## Suport

Per a qualsevol pregunta o problema amb la pàgina de preus, contacta amb l'equip de desenvolupament o consulta la documentació de Next.js i Tailwind CSS.

---

**Versió**: 1.0.0  
**Data de creació**: Gener 2025  
**Última actualització**: Gener 2025
