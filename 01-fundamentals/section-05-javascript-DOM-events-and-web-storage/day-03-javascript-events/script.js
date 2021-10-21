function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// 1. O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// - Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// - Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// - Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

let ulDays = document.querySelector("#days");
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
let holidays = [24, 25, 31];
const fridays = [4, 11, 18, 25];
for (let i of dezDaysList) {
  let liTag = document.createElement("li");
  liTag.innerText = i;
  liTag.className = "day";
  if (holidays.includes(i)) {
    liTag.className += " holiday";
  }
  if (fridays.includes(i)) {
    liTag.className += " friday";
  }
  ulDays.appendChild(liTag);
}

// 2. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// - Adicione a este botão a ID "btn-holiday" .
// - Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function createButton(buttonName, id, parent) {
  let buttonParent = document.querySelector(parent);
  let newButton = document.createElement("button");
  let newButtonID = id;
  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonParent.appendChild(newButton);
}
createButton("Feriados", "btn-holiday", ".buttons-container");

// 3. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

function displayHolidays(color) {
  let getHolidayBtn = document.querySelector("#btn-holiday");
  let listOfHolidays = document.querySelectorAll(".holiday");
  let defaultColor = "rgb(238,238,238)";
  let holidayColor = color;
  getHolidayBtn.addEventListener("click", function () {
    for (let i of listOfHolidays) {
      if (i.style.backgroundColor === holidayColor) {
        i.style.backgroundColor = defaultColor;
      } else {
        i.style.backgroundColor = holidayColor;
      }
    }
  });
}
displayHolidays("lightgreen");

// 4. Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// - Adicione a este botão o ID "btn-friday".
// - Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

createButton("Sexta-feira", "btn-friday", ".buttons-container");

// 5. Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function displayFridays(color) {
    let getFridayBtn = document.querySelector("#btn-friday");
    let listOfFridays = document.querySelectorAll(".friday");
    let defaultColor = "rgb(238,238,238)";
    let FridayColor = color;
    getFridayBtn.addEventListener("click", function () {
      for (let i of listOfFridays) {
        if (i.style.backgroundColor === FridayColor) {
          i.style.backgroundColor = defaultColor;
        } else {
          i.style.backgroundColor = FridayColor;
        }
      }
    });
  }
  displayFridays("lightgreen");
  