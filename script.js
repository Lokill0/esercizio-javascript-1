/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* const NOME = "Mario";
const COGNOME = "Rossi";
console.log(`Ciao, mi chiamo ${NOME} ${COGNOME}`); */

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

/* const A = 10;
const B = 3;
console.log(`${A} + ${B} = ${A + B}`);
console.log(`${A} - ${B} = ${A - B}`);
console.log(`${A} * ${B} = ${A * B}`);
console.log(`${A} / ${B} = ${A / B}`);
console.log(`${A} % ${B} = ${A % B}`);
console.log(`${A} ** ${B} = ${A ** B}`); */

/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* const ANNO_NASCITA = 2002;
const ANNO_CORRENTE = 2026;
console.log(`Età oggi hai: ${ANNO_CORRENTE - ANNO_NASCITA}`);
console.log(`Tra dieci anni avrai: ${ANNO_CORRENTE - ANNO_NASCITA + 10}`); */

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/


/* let eta = 24;
let maggiorenne = eta >= 18;
console.log(`Eta: ${eta} - Maggiorenne: ${maggiorenne}`); */

/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* let stringa = "ciao";
 let numero = 5;
 let booleano = true;
 let nullo = null;
 let indefinito = undefined;

console.log(`stringa è di tipo: ${typeof stringa}`);
console.log(`numero è di tipo: ${typeof numero}`);
console.log(`booleano è di tipo: ${typeof booleano}`);
// typeof null ritorna nullo perchè è un valore indefinito di proposito, esempio un valore che dovrebbe essere inserito da un utente ma non lo è.
console.log(`nullo è di tipo: ${typeof nullo}`);
console.log(`indefinito è di tipo: ${typeof indefinito}`);  */

/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/
/*
//let numero = 5;
//let stringa = "5";
 //console.log(`${numero == stringa}`); //darà true perchè anche se il tipo è diverso il contenuto è uguale;
// console.log(`${numero === stringa}`);  darà false perchè guarda se il vvalore e il tipo sono identici;
 */

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3   53 per concatenazione
   - "5" - 3   2 ( operatore aritmetico)
   - true + 1 2(perchè il true viene convertito in 1)
   - "10" * "2" (100 vengono entrambi convertiti da stringhe a numeri)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/


/* let N = 6;
let R = true;
console.log(`N è pari: ${R = (N % 2 === 0)}`);
console.log(`N è divisibile per 3: ${R = (N % 3 === 0)}`);
console.log(`N è pari e divisibile per 3: ${R = (N % 3 && N % 2) === 0}`); */

/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

const A = 10;
const B = 20;
const C = 15;
const PERIMETRO = A + B + C;
console.log(`${PERIMETRO}`);
if(A === B && B === C) {
   console.log(`Triangolo equilatero, perimetro: ${PERIMETRO}`);
} else if (A === B || B === C || A === C) {
   console.log(`Triangolo isoscele, perimetro: ${PERIMETRO}`);
} else {
   console.log(`Triangolo scaleno, perimetro: ${PERIMETRO}`);
}

