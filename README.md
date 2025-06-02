# Portfolio Ismail Alla - Développeur Mobile

Un portfolio moderne et responsive développé avec Next.js, TypeScript et TailwindCSS pour présenter les compétences et réalisations d'Ismail Alla, développeur mobile expérimenté.

## 🚀 Technologies Utilisées

- **Next.js 15** - Framework React pour le développement web
- **TypeScript** - Typage statique pour JavaScript
- **TailwindCSS** - Framework CSS utilitaire
- **Framer Motion** - Bibliothèque d'animations
- **Lucide React** - Icônes modernes
- **Responsive Design** - Compatible mobile, tablette et desktop

## 📋 Fonctionnalités

### 🏠 Sections du Portfolio

1. **Accueil (Hero)** - Présentation personnelle avec appel à l'action
2. **Compétences** - Technologies maîtrisées, langues et centres d'intérêt
3. **Expérience** - Parcours professionnel avec timeline interactive
4. **Éducation** - Formation académique et certifications
5. **Projets** - Réalisations avec filtres par catégorie
6. **Contact** - Formulaire de contact et informations

### ✨ Caractéristiques

- ✅ Design moderne et épuré
- ✅ Animations fluides avec Framer Motion
- ✅ Navigation responsive avec menu mobile
- ✅ Mode sombre automatique
- ✅ Optimisé pour les performances
- ✅ SEO-friendly
- ✅ Accessible (WCAG)
- ✅ Formulaire de contact fonctionnel

## 🛠️ Installation et Lancement

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

1. **Cloner le projet** (si applicable)

```bash
git clone [url-du-repo]
cd ismail-portfolio
```

2. **Installer les dépendances**

```bash
npm install
# ou
yarn install
```

3. **Lancer en mode développement**

```bash
npm run dev
# ou
yarn dev
```

4. **Ouvrir dans le navigateur**

```
http://localhost:3000
```

### Scripts Disponibles

```bash
# Développement
npm run dev

# Build pour la production
npm run build

# Lancer la version de production
npm run start

# Linter
npm run lint
```

## 📁 Structure du Projet

```
├── src/
│   ├── app/
│   │   ├── globals.css          # Styles globaux
│   │   ├── layout.tsx           # Layout principal
│   │   └── page.tsx             # Page d'accueil
│   └── components/
│       ├── Navigation.tsx       # Barre de navigation
│       ├── Footer.tsx           # Pied de page
│       └── sections/            # Sections du portfolio
│           ├── Hero.tsx         # Section héro
│           ├── Skills.tsx       # Compétences
│           ├── Experience.tsx   # Expérience
│           ├── Education.tsx    # Formation
│           ├── Projects.tsx     # Projets
│           └── Contact.tsx      # Contact
├── public/                      # Fichiers statiques
├── next.config.js              # Configuration Next.js
├── tailwind.config.ts          # Configuration TailwindCSS
├── tsconfig.json               # Configuration TypeScript
└── package.json                # Dépendances et scripts
```

## 🎨 Personnalisation

### Couleurs et Thème

Les couleurs principales peuvent être modifiées dans `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',    // Bleu principal
      secondary: '#10B981',  // Vert secondaire
      // ...
    }
  }
}
```

### Contenu

Pour modifier le contenu du portfolio:

1. **Informations personnelles** → `src/components/sections/Hero.tsx`
2. **Compétences** → `src/components/sections/Skills.tsx`
3. **Expérience** → `src/components/sections/Experience.tsx`
4. **Formation** → `src/components/sections/Education.tsx`
5. **Projets** → `src/components/sections/Projects.tsx`
6. **Contact** → `src/components/sections/Contact.tsx`

## 📱 Responsive Design

Le portfolio est optimisé pour tous les écrans:

- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

## 🌟 Optimisations

- **Performance** : Lazy loading, optimisation des images
- **SEO** : Meta tags, structure sémantique
- **Accessibilité** : ARIA labels, navigation au clavier
- **Core Web Vitals** : Optimisé pour les métriques Google

## 🚀 Déploiement

### Vercel (Recommandé)

1. Créer un compte sur [Vercel](https://vercel.com)
2. Connecter le repository GitHub
3. Déployer automatiquement

### Netlify

1. Build du projet : `npm run build`
2. Uploader le dossier `out/` sur Netlify

### Serveur traditionnel

1. Build : `npm run build`
2. Démarrer : `npm run start`

## 📞 Contact

**Ismail Alla**

- 📧 Email: alkaismail2001@gmail.com
- 📱 Téléphone: +212 651 462 399
- 🌍 LinkedIn: [linkedin.com/in/ismail-alla](https://www.linkedin.com/in/ismail-alla/)
- 📍 Localisation: Rabat, Maroc

## 📄 Licence

Ce projet est créé pour le portfolio personnel d'Ismail Alla.

---

Développé avec ❤️ par Ismail Alla
