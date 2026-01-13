# Test Technique Pretto

## Vue d'ensemble

Test technique React visant à reproduire un design Figma de manière pixel-perfect. L'implémentation inclut un header responsive avec navigation, une section de simulation de crédit et une section d'attestation de financement.

**Contraintes :**

- React uniquement
- Fichiers CSS classiques (pas de CSS-in-JS)
- Layouts Flexbox uniquement (pas de CSS Grid)
- Design responsive suivant les breakpoints Figma

## Stack Technique

- **React 19.2.0** avec TypeScript 5.9.3
- **Vite 7.2.4** - Outil de build avec HMR
- **ESLint** - Qualité de code (TypeScript ESLint, React Hooks)
- **vite-plugin-svgr** - Import des SVG en composants React
- **CSS classique** - Aucune bibliothèque CSS-in-JS

## Architecture

```
src/
├── components/
│   ├── layout/      # Header, Container, PageBackground
│   ├── sections/    # CreditSimulationSection, FinancingCertificateSection
│   └── ui/          # Button, ActionCard, FeatureCard, Title
├── assets/          # Images et icônes SVG
├── index.css        # Styles globaux et design tokens
└── typography.css   # Système typographique
```

**Organisation des composants :**

- **Layout** : Composants structurels (Header, Container)
- **UI** : Composants présentatifs réutilisables (Button, ActionCard)
- **Sections** : Sections spécifiques à la page composant layout et UI

**Co-localisation CSS :** Chaque composant possède son propre fichier CSS dans le même répertoire pour une meilleure maintenabilité.

## Stratégie de Style

### Design Tokens (Variables CSS)

Centralisés dans `index.css` :

- **Couleurs** : Nommage sémantique (`--color-bg-primary`, `--color-text-primary`, `--color-accent`)
- **Espacement** : Échelle basée sur 4px (`--space-1` à `--space-16`)
- **Typographie** : Classes de texte réutilisables (`.text-title`, `.text-body`, `.text-button`)
- **Breakpoints** : `834px` (tablette), `1440px` (desktop)

### Approche

- **Nommage** : Noms de classes simples avec des patterns BEM-like pour les composants complexes
- **Layout** : Flexbox exclusivement (pas de CSS Grid)
- **Responsive** : Mobile-first avec des requêtes `@media (min-width: ...)`
- **Icônes SVG** : Importées en composants React via `vite-plugin-svgr` pour un meilleur tree-shaking et styling

## Détails d'Implémentation Clés

- **Précision pixel-perfect** : Les design tokens garantissent un espacement et un dimensionnement exacts
- **Réutilisabilité des composants** : Composants UI conçus avec une personnalisation basée sur les props
- **Séparation des responsabilités** : Frontières claires entre layout, sections et UI
- **Accessibilité** : HTML sémantique, texte alternatif, hiérarchie de titres appropriée

## Comment Lancer le Projet

```bash
# Installer les dépendances
npm install

# Serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build de production
npm run preview

# Linter
npm run lint
```
