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

# Projekti
## Nov pojekt
V `projects/img` dodaj logo projekta (posvetuj se z Jurij Fortuna za konsistentnost). V `intro.md` po zgledu dodaj projekt.

# Static
## Dodajanje EP
Team Docs (Engineering Portfolio) se dodaja v `static/files/team-docs` v primerno podmapo v PDF obliki. Nato v `team-docs` v primerni `.md` datoteki dodaš povezavo.

## Urejanje sponzorjev
Logoti sponzorjev se nahajajo v `static/img/sponsors`. Uredi tudi `src/pages/sponsors.tsx`.