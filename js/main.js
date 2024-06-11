//  Task 1

const userChoice = prompt("Оберіть напій").toLowerCase();

switch (userChoice) {
  case "кава":
    alert("Ви обрали каву");

    break;

  case "чай":
    alert("Ви обрали чай");

    break;

  case "сік":
    alert("Ви обрали сік");

    break;

  default:
    alert("Такого напою немає в меню");
}

// Task 2

const userDay = prompt("Введіть день тижня").toLowerCase();

switch (userDay) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "п'ятниця":
    alert("Це робочий день");

    break;

  case "субота":
	case "неділя":
		alert("Це вихідний")

		break

	default:
		alert("Такого дня тижня не існує");
}

// Task 3

const userMonth1 = Number(prompt("Введіть номер місяця"));
let season;

switch (userMonth1) {
  case 1:
  case 2:
  case 12:
    season = "зима";

    break;

  case 3:
  case 4:
  case 5:
    season = "весна";

    break;

  case 6:
  case 7:
	case 8:
		season = "літо";

		break;

  case 9:
  case 10:
  case 11:
    season = "осінь";

    break;

  default:
    season = "помилка";
}

alert(`Це ${season}`);

// Task 4

const userMonth2 = Number(prompt("Введіть номер місяця"));
let countOfDays;

switch (userMonth2) {
  case 2:
    countOfDays = 28;

    break;

  case 4:
  case 6:
  case 9:
  case 11:
    countOfDays = 30;

    break;

  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    countOfDays = 31;

    break;

  default:
    countOfDays = "помилка";
}

alert(`В цьому місяці ${countOfDays} днів`);

// Task 5

const userColor = prompt("Введіть колір світлофора").toLowerCase();

switch (userColor) {
  case "червоний":
    alert("Стоп!");

    break;

  case "жовтий":
    alert("Чекати!");

    break;

  case "зелений":
    alert("Йти!");

    break;

  default:
    alert("Такого кольору на світлофорі нема");
}

// Task 6

const userNumber1 = Number(prompt("Введіть перше число"));
const userOperation = prompt("Введіть операцію");
const userNumber2 = Number(prompt("Введіть друге число"));
let result;

switch (userOperation) {
  case "+":
    result = userNumber1 + userNumber2;

    break;

  case "-":
    result = userNumber1 - userNumber2;

    break;

  case "*":
    result = userNumber1 * userNumber2;

    break;

  case "/":
    switch (userNumber2) {
      case 0:
        result = "помилка";

        break;

      default:
        result = userNumber1 / userNumber2;
    }

  default:
    result = "помилка";
}

alert(`${userNumber1} ${userOperation} ${userNumber2} = ${result}`);
