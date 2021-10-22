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

function displayFridays(string) {
  let getFridayBtn = document.querySelector("#btn-friday");
  let listOfFridays = document.querySelectorAll(".friday");
  let FridayText = string;
  getFridayBtn.addEventListener("click", function () {
    for (let i in listOfFridays) {
      console.log(i);
      if (listOfFridays[i].innerText !== FridayText) {
        listOfFridays[i].innerText = FridayText;
      } else {
        listOfFridays[i].innerText = fridays[i];
      }
    }
  });
}

displayFridays("SEXTOU o/");

// 6. Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.

function dayMouseOver() {
  let day = document.querySelector("#days");
  day.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "larger";
    event.target.style.fontWeight = "620";
  });
}
dayMouseOver();

function dayMouseOut() {
  let day = document.querySelector("#days");
  day.addEventListener("mouseout", function (event) {
    event.target.style.fontWeight = "200";
    event.target.style.fontSize = "20px";
  });
}
dayMouseOut();

// 7. Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// - O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function createTask(task) {
  let taskParent = document.querySelector(".my-tasks");
  let newTask = document.createElement("span");
  newTask.innerHTML = task;
  taskParent.appendChild(newTask);
}
createTask("Entrar no course da Trybe");

// 8. Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// - O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// - O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function taskDiv(color) {
  let tasks = document.querySelector(".my-tasks");
  let newTaskDiv = document.createElement("div");
  newTaskDiv.className = "task";
  newTaskDiv.style.backgroundColor = color;
  tasks.appendChild(newTaskDiv);
}
taskDiv("lightgreen");

// 9. Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// - Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
// Usei o gabarito :P (após entender claro)

function setTaskClass() {
  let selectedTask = document.getElementsByClassName("task selected");
  let myTasks = document.querySelector(".task");
  myTasks.addEventListener("click", function (event) {
    if (selectedTask.length === 0) {
      event.target.className = "task selected";
    } else {
      event.target.className = "task";
    }
  });
}
setTaskClass();

// 10. Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// - Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).
// Usei o gabarito nessa tbm :P (após entender (e arrumar conflitos de nomes de variaveis) claro)

function setDayColor() {
  let selectedTask = document.getElementsByClassName("task selected");
  let selectedDays = document.querySelector("#days");
  let tasksDiv = document.querySelector(".task");
  let taskColor = tasksDiv.style.backgroundColor;

  selectedDays.addEventListener("click", function (event) {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = "rgb(119,119,119)";
    }
  });
}
setDayColor();

// bonus
function newTask() {
  let tasksList = document.querySelector(".task-list");
  let inputTask = document.querySelector("#task-input");
  let addTaskBtn = document.querySelector("#btn-add");

  addTaskBtn.addEventListener("click", function () {
    if (inputTask.value.length > 0) {
      let newTaskLi = document.createElement("li");
      newTaskLi.innerText = inputTask.value;
      tasksList.appendChild(newTaskLi);
      inputTask.value = "";
    } else {
      alert("Erro: Digite ao menos 1 caractere.");
    }
  });

  inputTask.addEventListener("keyup", function (event) {
    if (event.key === "Enter" && inputTask.value.length > 0) {
      let newTaskLi = document.createElement("li");
      newTaskLi.innerText = inputTask.value;
      tasksList.appendChild(newTaskLi);
      inputTask.value = "";
    }
  });
}

newTask();
