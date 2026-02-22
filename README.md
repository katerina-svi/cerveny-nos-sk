# Digitální audit – ČERVENÝ NOS Clowndoctors

Interaktivní dashboard vizualizující výsledky digitálního auditu organizace ČERVENÝ NOS Clowndoctors (únor 2026).

## 🔗 Live demo

Otevřete `index.html` přímo v prohlížeči nebo nasaďte na GitHub Pages.

## 📊 Obsah dashboardu

Dashboard má 4 taby:

1. **Přehled** – baseline metriky, radar chart profilu organizace, segmentace zaměstnanců, AI adopce, KPIs
2. **Problémy & Nástroje** – top 8 problémů seřazených dle četnosti, potvrzení z dotazníku, hodnocení nástrojů
3. **Doporučení** – matice priorit (dopad vs. náročnost), časová osa implementace, rozdělení na quick wins / střednědobé / dlouhodobé
4. **Bezpečnost** – bezpečnostní metriky (aktuální vs. cíl), kritická zjištění, urgentní opatření

## 📐 Technické detaily

- **Jeden soubor** – `index.html` (žádný build, žádné závislosti na npm)
- **Chart.js 4.4** načtený z CDN (cdnjs.cloudflare.com)
- **Responzivní** – přizpůsobí se menším obrazovkám
- **Barevná paleta** organizace: žlutá `#ffcc00`, červená `#e85252`, světle modrá `#62c4dd`, tmavě modrá `#2d4173`

## 🚀 Nasazení na GitHub Pages

1. Vytvořte nový repozitář
2. Nahrajte `index.html`
3. Settings → Pages → Source: `main` branch, `/root`
4. Dashboard bude dostupný na `https://username.github.io/repo-name/`

## 📋 Metodologie auditu

- **Double Diamond** (fáze Discover)
- **Dotazník:** 17 respondentů, 57 otázek, 7 modulů
- **Rozhovory:** 8 respondentů, 7 rozhovorů, cca 350 minut
- **Období:** leden–únor 2026

## 📄 Licence

Data jsou anonymizována. Dashboard slouží k prezentaci výsledků auditu klientovi.

---

*Zpracovala: Mgr. Kateřina Švidrnochová | Únor 2026*
