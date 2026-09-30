# Dieta per Gruppo Sanguigno

App React + Vite per consultare gli alimenti benefici, neutri e da evitare secondo la dieta del gruppo sanguigno (0, A, B, AB).

## Funzioni

- Selezione del gruppo, ricordata tra una visita e l'altra
- Filtro per stato (benefico, neutro, vietato) con conteggi
- Ricerca per nome (ignora maiuscole e accenti) e filtro per categoria
- Tocca un alimento per confrontarlo con gli altri tre gruppi
- Tema chiaro e scuro automatico

## Avvio

```bash
npm install
npm run dev
```

Build di produzione: `npm run build` (output in `dist/`).

## Dati

Gli alimenti sono in `src/data/foods.js`. Ogni voce ha un nome e una stringa di 4 codici, uno per gruppo nell'ordine 0, A, B, AB:

- `b` benefico
- `n` neutro
- `a` da evitare

Esempio: `['Manzo', 'bana']` vuol dire benefico per 0, vietato per A, neutro per B, vietato per AB.

Le liste seguono la versione divulgativa della dieta di Peter D'Adamo e alcune voci cambiano tra le edizioni: controllale sul testo di riferimento prima di pubblicare. Le evidenze scientifiche non confermano che il gruppo sanguigno determini quali alimenti fanno bene.

## Deploy su Vercel

Importa il repository su Vercel: il preset Vite rileva da solo `npm run build` e la cartella `dist`.
