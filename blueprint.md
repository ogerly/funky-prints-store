# Blueprint: Funky Prints 🎨

## Zweck & Fähigkeiten

Funky Prints ist eine dynamische E-Commerce-Shopfront, die mit Vue.js 3, Vite, Pinia und Tailwind CSS erstellt wurde. Die Anwendung demonstriert moderne Frontend-Architektur, einschließlich reaktivem State-Management, komponentenbasierter Entwicklung und einem interaktiven Benutzererlebnis. Das Kern-Feature ist eine Produktgalerie mit einem per Klick aufrufbaren Detail-Modal, um Produkte zu konfigurieren und in den Warenkorb zu legen.

## Projektübersicht & Design

### Architektur & Technologie

*   **Framework**: Vue.js 3 (Composition API mit `<script setup>`)
*   **Build-Tool**: Vite
*   **State Management**: Pinia
*   **Sprache**: TypeScript
*   **Styling**: Tailwind CSS mit dem **DaisyUI**-Plugin

### Design & Theme ("funky")

*   **Farbpalette**:
    *   `primary` (Hauptaktion): `#FF1B8D` (Funky Pink)
    *   `secondary` (Zweitaktion): `#9D4EDD` (Funky Purple)
    *   `accent` (Hervorhebung): `#4CC9F0` (Funky Blue)
*   **Schriftarten**:
    *   **Display**: "Fredoka One" für Überschriften (ersetzt "Bebas Neue")
    *   **Body**: "DM Sans" für Fließtext
*   **Typografie-Stil**:
    *   **Überschriften**: Große, fette Schrift mit einem Farbverlauf von Pink zu Lila.
    *   **Fließtext**: Weicheres, dunkles Grau statt reinem Schwarz für besseren Kontrast und Lesbarkeit.
*   **Hintergrund**: Subtiler, heller Gradient von Pink über Lila zu Orange für eine luftige, dynamische Anmutung.

---

## Aktueller Plan: Warenkorb-Implementierung

### Phase 1: Warenkorb-Logik im Store

1.  **State erweitern**: Im `productStore` einen `cart`-State (Array) für die Warenkorb-Artikel und einen `isCartOpen`-State (boolean) für die Sichtbarkeit des Warenkorbs hinzufügen.
2.  **`addToCart`-Aktion implementieren**: Die bestehende `addToCart`-Funktion im Modal so anpassen, dass sie das konfigurierte Produkt (mit Menge und Farbe) tatsächlich in den `cart`-State des Stores legt.
3.  **Warenkorb-Aktionen erstellen**: Neue Aktionen im Store definieren (z.B. `toggleCart`, `removeFromCart`, `updateQuantity`), um den Warenkorb zu verwalten.

### Phase 2: UI-Komponenten

1.  **Warenkorb-Komponente erstellen (`ShoppingCart.vue`)**: Eine neue Komponente entwickeln, die als seitliches Overlay oder eigene Seite dient und die Artikel aus dem `cart`-State anzeigt.
2.  **Warenkorb-Icon in Navbar anpassen**: Das Warenkorb-Icon in `Navbar.vue` so anpassen, dass es die Anzahl der Artikel im Warenkorb anzeigt und beim Klick die `toggleCart`-Aktion auslöst.
3.  **`ShoppingCart.vue` integrieren**: Die neue Warenkorb-Komponente in `App.vue` einbinden und ihre Sichtbarkeit über den `isCartOpen`-State steuern.

---

## Abgeschlossene Aufgaben

### Design-Anpassung ("Funky Style")

*   **Typografie aktualisiert**: Die Schriftart für Überschriften wurde in der Tailwind-Konfiguration auf "Fredoka One" geändert.
*   **Farbverläufe hinzugefügt**: Alle Hauptüberschriften auf der Seite verwenden nun einen Farbverlauf von Pink zu Lila.
*   **Textfarben angepasst**: Fließtext wurde von Schwarz auf ein dunkles Grau geändert, um den Kontrast zu verbessern.
*   **Hintergrund überarbeitet**: Der globale Hintergrund wurde mit einem helleren, subtileren Farbverlauf versehen.
*   **Fehlerbehebung**: Ein Fehler in der `index.css` wurde behoben, der durch eine veraltete `@import`-Regel verursacht wurde.

### Refactoring: Interaktives Produktdetail-Modal & State Management

*   **Pinia Store erstellt (`productStore.ts`)**: Die Produktdaten wurden zentralisiert und um Bild-URLs/Beschreibungen erweitert. Die Logik zur Steuerung eines Modals wurde implementiert.
*   **`ProductGallery.vue` umgebaut**: Die Galerie bezieht ihre Daten nun aus dem Pinia-Store. Ein Klick auf ein Produkt öffnet die Detailansicht.
*   **`ProductDetailModal.vue` erstellt**: Eine neue Komponente wurde für die Detailansicht geschaffen, die die Auswahl von Farbe und Menge ermöglicht.
*   **Globale Modal-Verfügbarkeit**: Das Modal wurde in `App.vue` integriert und wird über den globalen State gesteuert.
*   **Fehlerbehebung**: Ein Syntaxfehler im Store (Anführungszeichen) und ein Konfigurationsfehler in `vite.config.ts` (Bild-URLs) wurden behoben.
*   **Dokumentation aktualisiert**: Eine neue `README.md` wurde erstellt.

### Initiales Setup & Fehlerbehebung

*   **Code-Analyse & Reparatur**: Eine nicht funktionierende Vue.js-Anwendung wurde erfolgreich repariert.
*   **TypeScript-Konvertierung**: Alle JavaScript-Konfigurationsdateien wurden auf TypeScript umgestellt.
*   **DaisyUI-Theme-Aktivierung**: Das `data-theme="funky"`-Attribut wurde hinzugefügt, um das custom Theme zu laden.
*   **PostCSS-Konflikt gelöst**: Der `ERR_REQUIRE_ESM`-Fehler wurde durch Umbenennung und Anpassung der Konfigurationsdatei behoben.
