const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'tasks.json');

// Funkcja do wczytywania zadań z pliku
function loadTasks() {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Funkcja do zapisywania zadań do pliku
function saveTasks(tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

// Dodawanie nowego zadania
function addTask(title) {
    const tasks = loadTasks();
    const newTask = { id: tasks.length + 1, title, completed: false };
    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`Dodano zadanie: ${title}`);
}

// Wyświetlanie wszystkich zadań
function listTasks() {
    const tasks = loadTasks();
    if (tasks.length === 0) {
        console.log('Brak zadań na liście.');
        return;
    }
    tasks.forEach(task => {
        console.log(`${task.id}. [${task.completed ? '✔' : ' '}] ${task.title}`);
    });
}

// Oznaczanie zadania jako ukończone
function completeTask(id) {
    const tasks = loadTasks();
    const task = tasks.find(t => t.id === parseInt(id));
    if (!task) {
        console.log('Nie znaleziono zadania.');
        return;
    }
    task.completed = true;
    saveTasks(tasks);
    console.log(`Zadanie "${task.title}" oznaczone jako ukończone.`);
}

// Usuwanie zadania
function removeTask(id) {
    let tasks = loadTasks();
    const initialLength = tasks.length;
    tasks = tasks.filter(t => t.id !== parseInt(id));
    if (tasks.length === initialLength) {
        console.log('Nie znaleziono zadania.');
        return;
    }
    saveTasks(tasks);
    console.log(`Usunięto zadanie o ID ${id}.`);
}

// Obsługa argumentów CLI
const [,, command, ...args] = process.argv;
switch (command) {
    case 'add':
        addTask(args.join(' '));
        break;
    case 'list':
        listTasks();
        break;
    case 'done':
        completeTask(args[0]);
        break;
    case 'remove':
        removeTask(args[0]);
        break;
    default:
        console.log('Nieznana komenda. Użyj: add, list, done, remove');
}
