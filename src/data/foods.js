// Codici per gruppo nell'ordine 0, A, B, AB:
// b = benefico, n = neutro, a = da evitare
export const GROUPS = [
  { key: '0', tag: 'Il cacciatore' },
  { key: 'A', tag: 'Il coltivatore' },
  { key: 'B', tag: 'Il nomade' },
  { key: 'AB', tag: "L'enigma" },
];

export const STATUS = {
  b: { label: 'Benefico', cls: 'good', order: 0 },
  n: { label: 'Neutro', cls: 'neutral', order: 1 },
  a: { label: 'Vietato', cls: 'avoid', order: 2 },
};

export const FOODS = [
  {
    cat: 'Carne e pollame',
    items: [
      ['Manzo', 'bana'], ['Agnello', 'bnbb'], ['Vitello', 'bann'], ['Maiale', 'aaaa'],
      ['Pollo', 'nnan'], ['Tacchino', 'nbnb'], ['Anatra', 'nnnn'], ['Coniglio', 'nnbb'],
      ['Selvaggina (cervo)', 'bnbn'], ['Fegato', 'bnbn'], ['Prosciutto e salumi', 'aaaa'],
    ],
  },
  {
    cat: 'Pesce',
    items: [
      ['Salmone', 'bbbb'], ['Sardine', 'bbbb'], ['Merluzzo', 'bbbb'], ['Sgombro', 'bbbb'],
      ['Trota', 'nbnb'], ['Tonno', 'nnnb'], ['Ippoglosso', 'baba'], ['Sogliola', 'baba'],
    ],
  },
  {
    cat: 'Latticini e uova',
    items: [
      ['Uova', 'nnnb'], ['Latte vaccino intero', 'aana'], ['Latte di capra', 'nnbb'],
      ['Yogurt', 'anbb'], ['Mozzarella', 'aabb'], ['Ricotta', 'anbb'], ['Feta', 'nbbb'],
      ['Parmigiano', 'aaaa'], ['Burro', 'nnnn'],
    ],
  },
  {
    cat: 'Oli e grassi',
    items: [['Olio d’oliva', 'bbbb'], ['Olio di lino', 'bbnn']],
  },
  {
    cat: 'Frutta secca e semi',
    items: [
      ['Noci', 'bbnb'], ['Mandorle', 'nnnn'], ['Arachidi', 'abab'], ['Nocciole', 'nnnn'],
      ['Pistacchi', 'aaaa'], ['Semi di zucca', 'bbnn'],
    ],
  },
  {
    cat: 'Cereali e pane',
    items: [
      ['Avena', 'nbbb'], ['Riso', 'nbbb'], ['Frumento integrale', 'anan'], ['Mais', 'anaa'],
      ['Grano saraceno', 'abab'], ['Miglio', 'nnbb'], ['Orzo', 'nnbn'], ['Pane di Ezechiele', 'bbnn'],
    ],
  },
  {
    cat: 'Legumi',
    items: [
      ['Lenticchie', 'nbab'], ['Fagioli borlotti', 'bbab'], ['Ceci', 'aana'], ['Soia', 'abnb'],
      ['Tofu', 'nbbb'],
    ],
  },
  {
    cat: 'Verdure',
    items: [
      ['Broccoli', 'bbbb'], ['Spinaci', 'bbbb'], ['Cavolo riccio', 'bbbb'],
      ['Cavolo cappuccio', 'aabb'], ['Carote', 'nbnn'], ['Zucchine', 'nbnb'], ['Aglio', 'bbnb'],
      ['Cipolla', 'bbnn'], ['Carciofi', 'bbnb'], ['Lattuga romana', 'bbnn'], ['Sedano', 'nbnb'],
    ],
  },
  {
    cat: 'Frutta',
    items: [
      ['Fichi', 'bbnb'], ['Prugne', 'bbbb'], ['Ciliegie', 'nbnb'], ['Ananas', 'nbnb'],
      ['Limone', 'nbnb'], ['Pompelmo', 'nbnb'], ['Mirtilli', 'nbbb'], ['Uva', 'nnbb'],
      ['Albicocche', 'nbbb'], ['Banane', 'aana'], ['Arance', 'aann'], ['Mele', 'nnnn'],
    ],
  },
  {
    cat: 'Bevande e spezie',
    items: [['Tè verde', 'bbbb'], ['Caffè', 'abab'], ['Zenzero', 'bbbb'], ['Curry', 'bnbn']],
  },
];
