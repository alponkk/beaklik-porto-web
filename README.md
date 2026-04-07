# BEA Klik — Company Profile Website

Website company profile **PT Budaya Estetika Anugerah Production**, rebuilt from Flutter Web to React.

## Tech Stack

- React 18 + Vite
- React Router v6
- Tailwind CSS v3
- Framer Motion
- React Icons
- React Helmet

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Pages

| Route              | Page                 |
|--------------------|----------------------|
| `/`                | Home                 |
| `/event-organizer` | Event Organizer      |
| `/entertainment`   | Entertainment        |
| `/it-services`     | IT Services          |
| `/trading`         | Trading              |
| `/about`           | About Us             |
| `/contact`         | Contact              |

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer, MobileDrawer, WhatsAppFAB
│   ├── ui/           # Reusable UI components
│   └── sections/     # Page-specific sections
├── pages/            # Route page components
├── data/             # Static content data
├── hooks/            # Custom hooks
└── styles/           # Tailwind + custom CSS
```

## Assets

Images are served from `public/assets/`, copied from the original Flutter project.
