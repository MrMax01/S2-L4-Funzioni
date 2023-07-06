/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const area = (l1, l2) => {
  if (typeof l1 !== "number" || typeof l2 !== "number") return console.log("Quello che hai passato non sono numeri!");
  return l1 * l2;
};
console.log(area(4, 3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = (num1, num2) => {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "Quello che hai passato non sono numeri interi!";
  } else if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
};

console.log(crazySum(3, 4)); //domanda

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = (num) => {
  let result = Math.abs(num - 19);
  if (result > 19) result *= 3;
  return result;
};
console.log(crazyDiff(-1));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = (n) => {
  if (!Number.isInteger(n)) {
    return "ERRORE!, il numero passato non è un intero!";
  } else if (n >= 20 && n <= 100) {
    return true;
  } else if (n === 400) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(3));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = (str) => {
  if (typeof str !== "string") return "non hai messo una stringa";
  else if (str.toLowerCase() === "epicode") return "EPICODE";
  else return "EPICODE" + str;
};

console.log(epify("EpiCode"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = (pos) => {
  let flag = false;
  if (pos < 0) return "Error! numero non positivo!";
  if (pos % 3 === 0 || pos % 7 === 0) flag = true;
  return flag;
};
console.log(check3and7(2));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = (str) => {
  let newStr = "";
  if (typeof str !== "string") return "Error!, non hai passato una stringa!";
  for (i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

console.log(reverseString("ok"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = (str) => {
  let words = str.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i].charAt(0).toUpperCase() + words[i].substring(1) + " ";
    result += word;
  }
  return result.trim();
};
console.log(upperFirst("dai che andiamo male"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const save = "ciao";
const cutString = (str) => {
  return str.slice(1, -1);
};
console.log(save);
console.log(cutString(save));
console.log(save);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = (n) => {
  const newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(Math.floor(Math.random() * 10));
  }
  return newArr;
};
console.log(giveMeRandom(10));
