'use strict';

// Создание объекта user (Kaneki Ken)

let user = {
    name: "Kaneki Ken",
    age: 18,
    rank: "SSS ghoul",
};

let key = prompt("What do u want to know? (name, age, rank)", "name");

alert(user[key]);

// Создание объекта гуль

function makeGhoul(name, age, rank) {
    return {
        name,
        age,
        rank
    };
}

let ghoul001 = makeGhoul("Roman", 21, "S ghoul");

// Вывод переменных в ghoul001

alert("Ghoul name: " + ghoul001.name + "\nGhoul age: " + ghoul001.age + "\nGhoul rank: " + ghoul001.rank);

// Вывод переменных в ghoul001 через цикл

// for (let key in ghoul001) {
//     alert(key + ": " + ghoul001[key]);
// }

