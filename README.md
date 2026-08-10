Navodila za urejanje vsebine

# Blog
## First time (nov avtor)
v `blog/authors.yml` dodaj po spodnjem zgledu:
```yml
david-zindovic:
  name: David Zindović
  page: true
```

## Nova sezona
v `blog/tags.yml` dodaj po spodnjem zgledu:
```yml
ftc-2022:
  label: FTC 2022
  permalink: /ftc-2022
  description: First Tech Challenge 2022
```


## Nov blog post
V `blog` ustvari podmapo z imenom po zgledu `YYYY-MM-DD-naslov` 
(`YYYY` - leto, `MM` - mesec (januar - 01), `DD` - dan (1. v mescu je 01), `naslov` - naslov bloga (vse z malo, predledke zamenjaj z `-`)).

Vsebino bloga piši v `index.md`, fotografije daj v `img`.
Začetna vsebina `index.md`:
```yaml
---
slug: Konec začetnega poskusa
title: Konec začetnega poskusa
authors: [ david-zindovic ]
tags: [ ftc-2022 ]
---
```
`slug` in `title` - naslov, `authors` - [avtor](#first-time-nov-avtor), `tags` - [tags](#nova-sezona)


# Past teams
Skopiraj in uredi enega izmed starih `.mdx` datotek. Fotografije daj v `img`.

# Zgodbe članov (Testimonials)
Stran `/testimonials` prikazuje kroge s slikami članov, klik odpre njihov osebni PDF (vgrajen v stran).

## Dodajanje nove osebe
1. Enostranski PDF (A4) daj v `static/files/testimonials/ime-priimek.pdf`. Če je datoteka velika, jo stisni:
   ```sh
   gs -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -dPDFSETTINGS=/ebook -dColorImageResolution=150 -sOutputFile=stisnjen.pdf original.pdf
   ```
2. Kvadratno sliko obraza (vsaj 300×300 px, format `.jpg`) daj v `static/img/testimonials/ime-priimek.jpg`.
3. V `src/pages/testimonials.tsx` dodaj nov vnos v tabelo `profiles` na vrhu datoteke (ime, program (FTC/FGC), pot do slike in PDF-ja).

## Statistika
Statistika (število dijakov, nagrad, mentorjev ...) je definirana v `src/components/stats.ts` in se prikazuje na začetni strani ter na strani `/testimonials`. Število sezon FGC se izračuna samodejno iz letnice.

OPR statistika ("Top X %") se ob vsakem obisku strani v živo pridobi iz [FTC Scout](https://ftcscout.org) API-ja za vse naše ekipe in sezone (najboljša uvrstitev po skupnem OPR). Dokler API ne odgovori (ali če ne deluje), se prikaže rezervna vrednost `FALLBACK_OPR_TOP_PERCENT` iz `src/components/stats.ts` — občasno jo posodobi:
```sh
curl "https://api.ftcscout.org/rest/v1/teams/28080/quick-stats?season=2025"
```
Percentil = `tot.rank / count` (manjše = boljše; 0,23 pomeni top 23 %). Novo ekipo dodaš v `FTC_TEAMS` v isti datoteki.

# Projekti
## Nov pojekt
V `projects/img` dodaj logo projekta (posvetuj se z Jurij Fortuna za konsistentnost). V `intro.md` po zgledu dodaj projekt.

# Static
## Dodajanje EP
Team Docs (Engineering Portfolio) se dodaja v `static/files/team-docs` v primerno podmapo v PDF obliki. Nato v `team-docs` v primerni `.md` datoteki dodaš povezavo.

## Urejanje sponzorjev
Logoti sponzorjev se nahajajo v `static/img/sponsors`. Uredi tudi `src/pages/sponsors.tsx`.