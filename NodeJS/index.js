const fs = require('fs');
const readline = require('readline-sync');
const FILE_PATH = 'tasks.json';

let tasks = [];
let nextId = 1;

function loadTasks() {
  if (fs.existsSync(FILE_PATH)) {
    const data = fs.readFileSync(FILE_PATH, 'utf8');
    try {
      const parsed = JSON.parse(data);
      tasks = parsed.tasks || [];
      nextId = parsed.nextId || 1;
    } catch (err) {
      console.log('Błąd w pliku JSON. Tworzę nową listę.');
    }
  }
}

function saveTasks() {
  const data = JSON.stringify({ tasks, nextId }, null, 2);
  fs.writeFileSync(FILE_PATH, data, 'utf8');
}

function showMenu() {
  console.log('\n=== TODO Lista ===');
  console.log('1. Dodaj zadanie');
  console.log('2. Pokaż wszystkie zadania');
  console.log('3. Usuń zadanie');
  console.log('4. Zmień status zadania (✔/X)');
  console.log('0. Wyjście\n');
}

function addTask() {
  const task = readline.question('Wpisz treść zadania: ');
  tasks.push({ id: nextId++, text: task, done: false });
  saveTasks();
  console.log('Zadanie dodane!');
}

function listTasks() {
  console.log('\n--- Lista zadań ---');
  if (tasks.length === 0) {
    console.log('Brak zadań.');
  } else {
    tasks.forEach(task => {
      const status = task.done ? '[✔]' : '[X]';
      console.log(`${status} [${task.id}] ${task.text}`);
    });
  }
}

function deleteTask() {
  const id = parseInt(readline.question('Podaj ID do usunięcia: '));
  const index = tasks.findIndex(t => t.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    saveTasks();
    console.log('Zadanie usunięte.');
  } else {
    console.log('Nie znaleziono zadania o tym ID.');
  }
}

function toggleTaskStatus() {
  listTasks(); 

  const id = parseInt(readline.question('Podaj ID zadania, którego status chcesz zmienić: '));
  const task = tasks.find(t => t.id === id);
  
  if (task) {
    task.done = !task.done;
    const status = task.done ? '[✔]' : '[X]';
    console.log(`Status zadania [${id}] (${task.text}) zmieniony na: ${status}`);
    saveTasks();
  } else {
    console.log('Nie znaleziono zadania o tym ID.');
  }
}

// Start
loadTasks();
while (true) {
  showMenu();
  const choice = readline.question('Wybierz opcję: ');
  switch (choice) {
    case '1':
      addTask();
      break;
    case '2':
      listTasks();
      break;
    case '3':
      deleteTask();
      break;
    case '4':
      toggleTaskStatus();
      break;
    case '0':
      console.log('\nDo zobaczenia!\n');
      process.exit(0);
    default:
      console.log('Nieprawidłowa opcja.');
  }
}