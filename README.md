# 🍆🍑 Funky Prints - Webseite

Eine freche, moderne Webseite für 3D-gedruckte erotische Kunstwerke.

## 🚀 Tech Stack

- **Vue 3** - Modernes Frontend Framework
- **Vite** - Schneller Build-Tool
- **Tailwind CSS** - Utility-First CSS Framework
- **DaisyUI** - Component Library für Tailwind

## 📦 Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build erstellen
npm run build

# Production Build testen
npm run preview
```

## 🎨 Features

- ✨ Animierte Landing Page mit bunten Gradients
- 🖼️ Produkt-Galerie mit Platzhaltern (Emojis)
- 📱 Voll responsiv (Mobile-First)
- 🎭 Freches, verspieltes Design
- 🛍️ Shop-Integration vorbereitet (Links zu externem Shop)
- 📸 Social Media Integration (Instagram, TikTok)
- 🇩🇪 Komplett auf Deutsch

## 🔧 Anpassungen

### Produkte ändern
Bearbeite `/src/components/ProductGallery.vue` und passe das `products` Array an.

### Farben anpassen
Bearbeite `/tailwind.config.js` unter `theme.extend.colors` und `daisyui.themes`.

### Bilder hinzufügen
Ersetze die Emoji-Platzhalter in der ProductGallery mit echten Produktbildern:
```vue
<img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
```

### Shop-Links einbinden
Aktualisiere die Button-Links in den Komponenten:
- `ProductGallery.vue` - "Zum Shop" Buttons
- `Navbar.vue` - "Zum Shop" Button im Header

## 📝 Nächste Schritte

1. **Produktfotos hinzufügen** - Echte Bilder statt Emojis
2. **Shop-System wählen**:
   - Etsy (einfach, populär)
   - Shopify (professionell)
   - WooCommerce (WordPress)
   - Stripe Payment Links
3. **Rechtliches**:
   - Impressum erstellen
   - Datenschutzerklärung hinzufügen
   - AGB erstellen
4. **Social Media**:
   - Instagram-Account verlinken
   - TikTok-Account verlinken
5. **Domain & Hosting**:
   - Domain registrieren
   - Hosting wählen (Netlify, Vercel, etc.)

## 🎯 Empfohlene Shop-Lösungen für Deutschland

### Etsy
- ✅ Einfache Einrichtung
- ✅ Integrierte Zahlungsabwicklung
- ✅ Große Community
- ✅ Automatische Rechnungen
- ❌ Gebühren pro Verkauf

### Shopify
- ✅ Professionell
- ✅ Viele Payment-Optionen
- ✅ Gute Buchhaltungs-Integration
- ❌ Monatliche Kosten

### Stripe Payment Links
- ✅ Sehr einfach
- ✅ Günstig
- ✅ Schnell einzurichten
- ❌ Keine Produktverwaltung

## 🔞 Hinweis

Diese Webseite präsentiert Produkte für Erwachsene (18+). Stelle sicher, dass alle rechtlichen Anforderungen erfüllt sind.

## 📧 Support

Bei Fragen oder Anpassungswünschen einfach melden!