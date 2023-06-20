// Zadanie 1: Suma liczb parzystych

// Napisz kod, który oblicza sumę wszystkich liczb parzystych od 1 do 100 (włącznie) korzystając z pętli for.
// Po obliczeniu sumy, wyświetl wynik w konsoli.
let sum = 0;

for (let i = 1; i < 101; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log(sum);
