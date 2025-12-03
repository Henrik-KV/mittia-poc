# Mittia POC - Modern Mässwebbplats

En proof-of-concept-webbplats för **Mittia Event AB** - arrangörer av Nordens ledande branschmässor.

## 🎯 Projektöversikt

Detta är en helt ny, modern webbplats designad för Mittia som showcasar deras fyra mässor:
- **Skogstransport** - Nordens största skogstransportmässa (gul accent)
- **Gård & Skog** - Lantbruks- och skogsmässa (grön accent)
- **Park & Gata** - Mässa för offentlig förvaltning (orange accent)
- **Expo Hälsingland 2027** - Regional utvecklingsmässa (cyan accent)

## ✨ Funktioner

- 🎬 Hero-sektion med bakgrundsvideo-placeholder
- 🎨 Modern, responsiv design med Tailwind CSS
- 🧭 Elegant navigation med färgkodade mässor
- 📱 Fullt responsiv för mobil och desktop
- ⚡ Snabb performance med Vite och React
- 🎯 Sektioner för utställare och besökare
- 📰 Nyheter och aktuellt
- 📧 Komplett footer med kontaktinfo

## 🚀 Kom igång

```bash
# Installera dependencies
npm install

# Starta utvecklingsserver
npm run dev

# Bygg för produktion
npm run build

# Förhandsgranska produktionsbygget
npm run preview
```

## 📦 Deploy till Vercel

1. Push projektet till GitHub
2. Importera repositoryt i Vercel
3. Deploy sker automatiskt

```bash
# Push till GitHub
git remote add origin https://github.com/ditt-username/mittia-poc.git
git push -u origin master
```

## 🛠 Teknisk stack

- **React 19** - UI-bibliotek
- **Vite** - Byggverktyg
- **Tailwind CSS** - Styling
- **Lucide React** - Ikoner
- **Google Fonts (Inter)** - Typsnitt

## 📁 Projektstruktur

```
mittia-poc/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation
│   │   ├── Hero.jsx        # Hero med bakgrundsvideo
│   │   ├── Exhibitions.jsx # Mässöversikt
│   │   ├── ForExhibitors.jsx
│   │   ├── ForVisitors.jsx
│   │   ├── About.jsx
│   │   ├── News.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
└── index.html
```

## 🎨 Färgschema

| Mässa | Färg | Hex |
|-------|------|-----|
| Skogstransport | Gul | #F59E0B |
| Gård & Skog | Grön | #22C55E |
| Park & Gata | Orange | #F97316 |
| Expo Hälsingland | Cyan | #06B6D4 |

## 📝 Att göra

- [ ] Lägg till riktig bakgrundsvideo (MP4)
- [ ] Implementera undersidor för varje mässa
- [ ] Lägg till kontaktformulär
- [ ] Integrera med CMS för nyheter
- [ ] Optimera bilder

---

**Mittia Event AB** | Kyrksjönäsvägen 18, 827 30 Ljusdal | [mittia.com](https://www.mittia.com)
