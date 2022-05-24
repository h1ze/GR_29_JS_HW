// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

const checkAge4 = function(age) {
    let age_2 = 18;
    let age_3 = 60;
    if (+age) {
        if (age < age_2) {
            console.log('You don’t have access cause your age is ' + age + '. It’s less then 18.');
        } else if (age >= age_2 && age < age_3) {
            console.log('Welcome!');
        } else if (age > age_3) {
            console.log ('Keep calm and look Culture channel.');
        } else {
            console.log('Technical work');
        }
    }  else {console.log('Введите число!')}  
}

let age = prompt('Введите ваш возраст: ');
checkAge4(age);