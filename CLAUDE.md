# GPI Projekt — gpiprojekt.pl

Strona firmowa spółki GPI PROJEKT P.S.A.

## Dane firmy

- **Nazwa:** GPI PROJEKT P.S.A.
- **NIP:** 9522229976
- **KRS:** 0000975759
- **Adres:** ul. Cyklamenowa 7, 05-077 Warszawa
- **Telefon:** +48 536 899 899
- **Email:** kontakt@gpiprojekt.pl
- **Właściciel:** Grzegorz Pilich

## Stack technologiczny

- **Frontend:** Vite + React 18 + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Backend/DB:** Supabase (jak w bestshirtwarsaw)
- **Hosting:** Cloudflare Pages (auto-deploy z GitHub)
- **Email:** Resend

## Komendy

```bash
npm run dev      # dev server (localhost:5173)
npm run build    # produkcja
npm run preview  # podgląd buildu
```

## Struktura projektu

```
src/
  pages/       # strony (HomePage, AboutPage, ContactPage itd.)
  components/  # komponenty wielokrotnego użytku
  assets/      # obrazy, logo
```

## Konwencje

- Komponenty: PascalCase, pliki `.tsx`
- Style: Tailwind utility classes, bez osobnych plików CSS
- Język strony: polski
- Brak komentarzy w kodzie, chyba że logika jest nieoczywista
- Nie tworzyć plików README ani dokumentacji

## Powiązane projekty

- **BestShirt.pl** — `/Users/gpilich/bestshirtwarsaw` — sklep z koszulkami firmowymi (ta sama firma)

## Uprawnienia

Claude może bez pytania: edytować pliki, uruchamiać `npm run dev/build`, robić `git add/commit`, instalować paczki npm.
Claude pyta przed: `git push`, usunięciem plików, deploy na produkcję.
