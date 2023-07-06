// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const checkArray = (randomArr) => {
  let result = 0;
  for (let i = 0; i < randomArr.length; i++) {
    if (randomArr[i] > 5) {
      console.log(`${randomArr[i]} è maggiore di 5`);
      result += randomArr[i];
    }
  }
  return result;
};
const random = giveMeRandom(10);
console.log(random);
console.log(checkArray(random));
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
  {
    price: 12,
    name: "maglietta",
    id: 1,
    quantity: 2,
  },
  {
    price: 120,
    name: "pantalone",
    id: 2,
    quantity: 1,
  },
  {
    price: 60,
    name: "gonna",
    id: 3,
    quantity: 2,
  },
];

const shoppingCartTotal = (oggetto) => {
  let totalCart = 0;
  for (let i = 0; i < oggetto.length; i++) {
    totalCart += oggetto[i].quantity * oggetto[i].price;
    console.log(`${oggetto[i].name}, quantità: ${oggetto[i].quantity}, prezzo: ${oggetto[i].price} `);
  }
  return totalCart;
};
console.log(shoppingCartTotal(shoppingCart));
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const addToShoppingCart = (price, name, id, quantity) => {
  const element = {};
  element.price = price;
  element.name = name;
  element.id = id;
  element.quantity = quantity;
  shoppingCart.push(element);
};

addToShoppingCart(10, "occhiali", 4, 1);
console.log(shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const maxShoppingCart = (cart) => {
  let result = "";
  let tmp = 0;
  for (let i = 0; i < cart.length; i++) {
    if (tmp < cart[i].price) {
      tmp = cart[i].price;
      result = cart[i].name;
    }
  }
  return result;
};

console.log(maxShoppingCart(shoppingCart));
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const latestShoppingCart = (cart) => {
  return cart[cart.length - 1];
};
console.log(latestShoppingCart(shoppingCart));
/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const loopUntil = (n) => {
  let cont = 0;
  let randomNum = 0;
  while (cont < 3) {
    randomNum = Math.floor(Math.random() * 10);
    console.log(randomNum);
    if (randomNum > n) {
      cont++;
      console.log(`il numero da te selezionato è stato superato ${cont} volta`);
    }
  }
};
loopUntil(5);
/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const average = (arr) => {
  let result = 0;
  let media = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") continue;
    media++;
    result += arr[i];
  }
  return result / media;
};
console.log(average([9, 8, 7, "v", 5]));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const longest = (arrStr) => {
  let saveArr = " ";
  for (let i = 0; i < arrStr.length; i++) {
    if (saveArr.length < arrStr[i].length) saveArr = arrStr[i];
  }
  return saveArr;
};
console.log(longest(["ciao", "mio", "supercalifragilistichespiralidoso", "bl"]));
/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const antiSpam = (emailContent) => {
  if (emailContent.toUpperCase().includes("SPAM") || emailContent.toUpperCase().includes("SCAM")) return false;
  else return true;
};

console.log(antiSpam("ciao volevo chiedere"));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
