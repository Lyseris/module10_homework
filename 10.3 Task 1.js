let number = prompt("Введите число");

console.log(typeof +number);

if (number % 2 == 0) {
   console.log("Четное");
} else {
  prompt("Упс, кажется, вы ошиблись");
}