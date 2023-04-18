//REGULAR EXPRESSIONS  (RegEx)

//servono per controllare le stringhe, se una determinata stringa rispetta un determinato pattern
//esempio mail, numero di telefono

//serve anche per controllare il codice, perchè anche quello ha delle norme

//visto che scriverlo sarebbe molto lungo e complicato sono state inventate le regular expressions


//ci sono due modi principali per usare le regex

let re1 = new RegExp('abc');
let re2 = /abc/;

console.log(re1);
console.log(re2);

//queste due sono equivalenti

//le regex hanno delle funzionalità (metodi) propri
//ad esempio .test()

console.log(/abc/.test('abcde')); //true  //un pattern può essere dovunque all'interno della stringa e esattamente quel pattern 
console.log(/abc/.test('abxde')); //false
console.log(/abc/.test('ab cde')); //false
console.log(/abc/.test('abCde')); //false  //deve essere esattamente uguale

//per i numeri:

console.log(/[01234356789]/.test('in 1992')) //true //sto cercando almeno UNO dei valori fra le quadre, a differenza di linea 24,
                                            // in cui (senza quadre) cerca ESATTAMENTE quel pattern
console.log(/[0-9]/.test('in 1992'))         //true

//le parentesi quadre indicano un SET di parametri
//per le lettere

console.log(/[a - e]/.test('peppo'));  //true
console.log(/[a-e][q-z]/.test('peppo')); //false. ho richiesto una lettera del primo set SEGUITA da una lettera del secondo SET . COME UN AND &
console.log(/[a-e][q-z]/.test('pazzo')); //true perchè contiene una A seguita da una Z, soddisfa il pattern
console.log(/[a-zA-Z]/.test('U')) //true. praticamente cerca un valore tra il set a-z (lettere minuscole) e A-Z(lettere minuscole). COME UN OR ||

/*
\d ->tutti i numeri
\w ->tutte le lettere e i numeri, i caratteri alfanumerici (e l'underscore_, perchè spesso viene usato in js nelle parole)
\s ->tutti i caratteri "spazio", (spazio, \n (a capo), etc)
\D ->NOT numero
\W ->NOT carattere alfanumerico
\S ->NOT carattere spazio
*/

console.log(/\s/.test('giam bo')) //true, perchè c'è uno spazio
console.log(/\S/.test('giam bo')) //true, perchè basta che ci sia un carattere che non è uno spazio
console.log(/\S/.test(' \n ')) //false perchè sono solo spazi

//il punto nelle espressioni regolari significa QUALSIASI CARATTERE CHE NON SIA UN A CAPO (lo spazio si)

console.log(/./.test('\n')) //false
console.log(/./.test('£')) //true

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test('10-03-2005 15:35')) //true
console.log(dateTime.test('1-12-2009 15:20')) //false, manca il primo numero

console.log(/meet.google.com\/[a-z][a-z][a-z]-[a-z][a-z][a-z][a-z]-[a-z][a-z][a-z]/.test('meet.google.com/idf-sahc-mfk'))

const regEx = /meet.google.com\/[a-z][a-z][a-z]-[a-z][a-z][a-z][a-z]-[a-z][a-z][a-z]/;

console.log(regEx.test('meet.google.com/ass-fsdd-sds'))  //true

function testRegex(pattern, string) {
    console.log("Testing string '" + string + "' " + pattern.test(string))
}

testRegex(regEx,'meet.google.com/ogs-jhrd-dsa') //true

//questo funziona ma c'è una soluzione più efficiente

let regExConGraffe = /meet.google.com\/[a-z]{3}-[a-z]{4}-[a-z]{3}/;

testRegex(regExConGraffe, 'meet.google.com/ogs-jhfd-dsa');

//questo può essere molto utile con le date
//accento circonflesso ^ e $ delimitano i limiti di inizio e fine della stringa. quando voglio che dopo o prima non ci sia altro

let datePattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/;   //{1, 2} significa ALMENO 1, AL MASSIMO 2

testRegex(datePattern, '10/3/1993'); //true
testRegex(datePattern, '11/10/1992'); //true
testRegex(datePattern, '05/15/19939'); //false
testRegex(datePattern, '5-5-19939'); //false

let datePattern2 = /^\d{1,2}\/\d{1,2}\/\d{4,}$/;  //il {4,} indica un numero minimo ma non un numero massimo

//visto che è una cosa comune è stato inventato un carattere speciale

let datePattern3 = /^\d{1,2}\/\d{1,2}\/\d+$/;  //d+ significa almeno uno fino a infinito