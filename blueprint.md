# Blueprint: Funky Prints 🎨

## Zweck & Fähigkeiten

Funky Prints ist eine moderne, optisch ansprechende Vue.js-Webanwendung, die für den Verkauf von 3D-gedruckten erotischen Kunstwerken konzipiert wurde. Die Seite legt Wert auf ein einzigartiges, farbenfrohes Design, eine klare Benutzerführung und eine performance-optimierte Darstellung. Zukünftig wird sie einen einfachen Bestellprozess via "Magic Link" und die Möglichkeit für Spezialanfertigungen bieten.

## Projektübersicht & Design

### Architektur & Technologie

*   **Framework**: Vue.js 3 (Composition API mit `<script setup>`)
*   **Build-Tool**: Vite
*   **Sprache**: TypeScript
*   **Styling**: Tailwind CSS mit dem **DaisyUI**-Plugin
*   **Deployment**: Automatisches Deployment auf GitHub Pages bei jedem Push.

### Design & Theme ("funky")

*   **Farbpalette**:
    *   `primary` (Hauptaktion): `#FF1B8D` (Funky Pink)
    *   `secondary` (Zweitaktion): `#9D4EDD` (Funky Purple)
    *   `accent` (Hervorhebung): `#4CC9F0` (Funky Blue)
*   **Schriftarten**:
    *   **Display**: "Bebas Neue" für Überschriften
    *   **Body**: "DM Sans" für Fließtext

---

## Aktueller Plan: Bestellprozess & Automatisierung

### Phase 1: CI/CD & Projekt-Setup (In Arbeit)

1.  **Vite-Konfiguration für GitHub Pages**: Die `vite.config.ts` wird aktualisiert, um den `base`-Pfad für das Deployment auf GitHub Pages korrekt zu setzen (`/funky-prints-store/`).
2.  **Automatisches Deployment**: Ein GitHub Actions Workflow (`.github/workflows/deploy.yml`) wird erstellt. Dieser wird bei jedem Push in das `main`-Branch automatisch:
    *   Die `npm`-Abhängigkeiten installieren (`npm install`).
    *   Die Anwendung für die Produktion bauen (`npm run build`).
    *   Den gebauten `dist`-Ordner auf dem `gh-pages`-Branch veröffentlichen.
3.  **Git-Initialisierung**: Das lokale Verzeichnis wird als Git-Repository initialisiert und mit dem von dir bereitgestellten Remote-Repository auf GitHub verbunden.

### Phase 2: Feature-Entwicklung

*   **Produktdetails erweitern**:
    *   Füge eine **Stückzahlauswahl** zu jedem Produkt hinzu.
    *   Füge eine **Farbauswahl** (z.B. mit Radio-Buttons) hinzu.
*   **Bestellprozess (Magic Link Simulation)**:
    *   Implementiere einen "Bestellen"-Button.
    *   Bei Klick wird eine Funktion ausgelöst, die die ausgewählten Produktdaten (Name, Stückzahl, Farbe) sammelt und eine Bestätigung auf der Konsole ausgibt, um den "Magic Link"-Flow zu simulieren.
*   **Neue Seiten erstellen**:
    *   **Kontakt-Seite**: Eine neue Komponente `Contact.vue` mit einem Kontaktformular und Geschäftsdetails wird erstellt.
    *   **Custom-Seite**: Eine Platzhalter-Komponente `Custom.vue` für zukünftige Upload-Funktionen von 3D-Modellen wird angelegt.

---

## Abgeschlossene Aufgaben

### Initiales Setup & Fehlerbehebung

*   **Code-Analyse & Reparatur**: Eine nicht funktionierende Vue.js-Anwendung wurde erfolgreich repariert.
*   **TypeScript-Konvertierung**: Alle JavaScript-Konfigurationsdateien wurden auf TypeScript umgestellt (`tailwind.config.ts`, `postcss.config.ts`).
*   **Vite-Konfiguration**: `vite.config.ts` wurde für eine korrekte Verarbeitung von Vue und PostCSS konfiguriert.
*   **Abhängigkeiten repariert**: Fehlende Pakete wurden ergänzt und `npm install` ausgeführt.
*   **DaisyUI-Theme-Aktivierung**: Das `data-theme="funky"`-Attribut wurde in der `index.html` hinzugefügt, um das custom Theme zu laden.
*   **PostCSS-Konflikt gelöst**: Der `ERR_REQUIRE_ESM`-Fehler wurde durch Umbenennung von `postcss.config.ts` in `postcss.config.cjs` und Anpassung des Modul-Exports behoben.

