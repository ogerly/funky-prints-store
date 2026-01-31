# Funky Prints Store - A Modern Vue.js Showcase

Dies ist eine dynamische E-Commerce-Shopfront, die mit Vue.js 3, Vite, Pinia und Tailwind CSS erstellt wurde. Die Anwendung demonstriert moderne Frontend-Architektur und Best Practices, einschließlich reaktivem State-Management, komponentenbasierter Entwicklung und einem interaktiven Benutzererlebnis.

## ✨ Features

- **Dynamische Produktgalerie:** Produkte werden zentral über einen Pinia-Store verwaltet und in einer ansprechenden Galerie angezeigt.
- **Interaktives Produktdetail-Modal:** Ein Klick auf ein Produkt öffnet ein Modal mit detaillierten Informationen, Farbauswahl, Mengenregler und einem "In den Warenkorb"-Button.
- **Zentrales State Management:** Die gesamte Anwendungslogik – Produkte, Modal-Status, Warenkorb – wird sauber und effizient mit Pinia, dem offiziellen State-Management-Tool für Vue.js, verwaltet.
- **Modernes Styling:** Das Design wird mit Tailwind CSS und dem daisyUI-Komponenten-Framework umgesetzt, was ein schnelles, responsives und anpassbares Styling ermöglicht.
- **Optimierte Entwicklungsumgebung:** Gebaut mit Vite für blitzschnelle Startzeiten, Hot Module Replacement (HMR) und optimierte Builds.
- **TypeScript-Integration:** Die gesamte Codebasis ist in TypeScript geschrieben, um die Codequalität, Wartbarkeit und Entwicklererfahrung zu verbessern.

## 🚀 Tech Stack

- **Framework:** [Vue.js 3](https://vuejs.org/) (Composition API mit `<script setup>`)
- **Build-Tool:** [Vite](https://vitejs.dev/)
- **State Management:** [Pinia](https://pinia.vuejs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [daisyUI](https://daisyui.com/)
- **Sprache:** [TypeScript](https://www.typescriptlang.org/)

## 🛠️ Project Setup

1.  **Abhängigkeiten installieren:**
    ```bash
    npm install
    ```

2.  **Entwicklungsserver starten:**
    ```bash
    npm run dev
    ```

3.  **Produktions-Build erstellen:**
    ```bash
    npm run build
    ```

## 📂 Projektstruktur

```
/funky-prints-store
├── public/                 # Statische Assets
├── src/
│   ├── assets/             # Bilder, Schriftarten etc.
│   ├── components/         # Vue-Komponenten (Navbar, ProductGallery, ProductDetailModal, etc.)
│   ├── stores/             # Pinia Stores (z.B. productStore.ts)
│   ├── App.vue             # Haupt-App-Komponente
│   ├── main.ts             # Anwendungseinstiegspunkt
│   └── style.css           # Globale Styles
├── index.html              # HTML-Einstiegspunkt
├── package.json            # Projekt-Metadaten und Abhängigkeiten
├── tailwind.config.js      # Konfiguration für Tailwind CSS
└── vite.config.ts          # Konfiguration für Vite
```

## 🎯 Nächste Schritte

- [ ] **Warenkorb-Logik implementieren:** Die `addToCart`-Aktion im `productStore` so erweitern, dass Produkte tatsächlich in einen `cart`-State gelegt werden.
- [ ] **Warenkorb-Ansicht erstellen:** Eine neue Komponente (z.B. ein ausfahrbares Seitenteil oder eine eigene Seite) entwickeln, die die Artikel im Warenkorb anzeigt.
- [ ] **Warenkorb-Icon in Navbar:** Das Warenkorb-Icon in der `Navbar` so anpassen, dass es die aktuelle Anzahl der Artikel im Warenkorb anzeigt.
- [ ] **Checkout-Prozess (simuliert):** Einen einfachen Checkout-Flow erstellen, der die Bestellung "abschickt" und den Warenkorb leert.
