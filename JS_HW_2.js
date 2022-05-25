// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
let result = 0;
for (let i = 1; i <= 10; i++) {
result = 2 ** i;
console.log(result);
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function pow(arg) {
    let result = 2 ** arg;
    console.log(result);
}

pow(5)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let smiles = '';
for (let i = 1; i <= 5; i++) {
    smiles += ':)';
    console.log(smiles);
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows) {
    let newStroka = '';
    for (let i = 1; i <= numberOfRows; i++) {
        newStroka += stroka;
        console.log(newStroka);
    }
}

printSmile('=(', 5)


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

function getWordStructure(word) {
    let vowels = 'aeiouy'.split('');
    let consonants = 'bcdfghklmnpqrstvwxz'.split('');
    let numberOfVowels = 0;
    let numberOfConsonants = 0;
    for (char of word) {
        if (vowels.includes(char)) {numberOfVowels++}
        if (consonants.includes(char)) {numberOfConsonants++}
    }
    console.log(`Слово ${word} состоит из ${numberOfVowels} гласных и ${numberOfConsonants} согласных.` )
}

getWordStructure('Check-list')


// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

function isPalindrom(word) {
    let newWord = word.toLowerCase().split('').reverse().join('');
    if (word = newWord) {
        console.log('Это палиндром.')
    }
    else {console.log('Это не палиндром.')}
}

isPalindrom('Abba');