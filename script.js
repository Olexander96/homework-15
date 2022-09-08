// 1)
    /* let years = +prompt('Якільки Вам років?', 0);

    if (0 < years && years <=11) {
        alert('Ви дитина!')
    } else if (12 <= years && years <=17) {
        alert('Ви підліток!')
    } else if (18 <= years && years <=59) {
        alert('Ви дорослий!')
    } else if (60 <= years && years <=120) {
        alert('Ви пенсіонер!')   
    } else {
        alert('Невірно введені дані!')
    } */

// 2)

    /* let num = +prompt('Введіть число від 0 до 9');

    switch(num) {
        case 0:
            alert(')');
            break;
        case 1:
            alert('!');
            break;
        case 2:
            alert('@');
            break;
        case 3:
            alert('#');
            break;
        case 4:
            alert('$');
            break;
        case 5:
            alert('%');
            break;
        case 6:
            alert('^');
            break;
        case 7:
            alert('&');
            break;
        case 8:
            alert('*');
            break;
        case 9:
            alert('(');
            break;
    } */

// 3)

    /*let firstNum = +prompt('Введіть початок діапазону', 0);
    let secondNum = +prompt('Введіть кінець діапазону', 0);
    let sum = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        sum += i;
    }

    alert(`Сума діапазону ${sum}`)*/

//4) 
    /*let a = +prompt('Введіть перше число');
    let b = +prompt('Введіть друге число');
    let c;

    
    while (a != b) {
        if (a > b) {
        a = a - b;
        } else if (a < b) {
            c = a;
            a = b;
            b = c;
        }
    }

    alert(`Найбільшим спільним дільником буде ${c}`)*/
        
//5) 
    /*let number = +prompt('Введіть число', 0);

    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            console.log(i)
        }
    }*/

// 6) 

    /*let num = prompt('Введіть 5-ти розрядне число', '');

    if (num[0] === num[4] && num[1] === num[3] ) {
        alert('Це число ПАЛІНДРОМ!')
    } else {
        alert('Це інше число')
    }*/

// 7)

    /*let prise = prompt('Яка сума покупки, в грн.?', '');

    if (prise < 200) {
        alert(`До сплати ${prise} грн. знижка 0%`)
    } else if (200 < prise && prise < 300) {
        prise = prise - (prise * 0.03)
        alert(`До сплати ${prise} грн. знижка 3%`)
    } else if (300 < prise && prise < 500) {
        prise = prise - (prise * 0.05)
        alert(`До сплати ${prise} грн. знижка 5%`)
    } else {
        prise = prise - (prise * 0.07)
        alert(`До сплати ${prise} грн. знижка 7%`)
    }*/

// 8)
    /*let numbers = prompt('Введіть 10 чисел', 0);
    let numWithPlus = 0;
    let numWithZero = 0;
    let numWithMinus = 0;
    let numCouple = 0;
    let numNotCouple = 0;

    for (let num of numbers) {
        if (+num > 0) {
            numWithPlus += 1
        } else if (+num == 0) {
            numWithZero += 1
        } else if (num === '-') {
            numWithMinus += 1
        } else {
            numWithPlus = 0
            numWithZero = 0
            numWithMinus = 0
        }
    }

    for (let num of numbers) {
        if (+num % 2 == 0 && num !== '-' && +num !== 0) {
            numCouple += 1
        } else if (+num % 2 !== 0 && num !== '-') {
            numNotCouple +=1
        } else {
            numCouple = 0;
            numNotCouple = 0;
        }
    }

    alert (`Додатніх чисел ${numWithPlus - numWithMinus} шт.,
    Нулів ${numWithZero} шт., 
    Від'ємних ${numWithMinus} шт.,
    Числа парні ${numCouple} шт.,
    Числа непарні ${numNotCouple} шт.`); */

// 9)
    /* let day = 'Понеділок';

    while (day) {
            alert(`${day}. Хочеш побачити наступний день?`);

        if (day == 'Понеділок') {
            day = 'Вівторок';
            alert(`${day}. Хочеш побачити наступний день?`);
        }
        if (day == 'Вівторок') {
            day = 'Середа';
            alert(`${day}. Хочеш побачити наступний день?`);
        }
        if (day == 'Середа') {
            day = 'Четверг';
            alert(`${day}. Хочеш побачити наступний день?`);
        }
        if (day == 'Четверг') {
            day = 'Пятниця';
            alert(`${day}. Хочеш побачити наступний день?`);
        }
        if (day == 'Пятниця') {
            day = 'Субота';
            alert(`${day}. Хочеш побачити наступний день?`);
        }
        if (day == 'Субота') {
            day = 'Неділля';
            alert(`${day}. Хочеш побачити наступний день?`);
        }
    } */


//10)????????????????????????????????????????????????
    /*let number = +prompt('Введіть число від 0 до 100', 0)
    
    let start = 0;
    let end = 100;
    let midle = ((end - start) / 2);
    let question = confirm(`Ваше число > ${midle}, чи == ${midle}?`);

    if (question = true) {
        question = confirm(`Ваше число == ${midle}?`)
        if (question = true) {
            alert(`Ваше число ${midle}`)
        } else if {

        }
    }*/
    

    

// 11)
    /*let num = 0;

    for (let i = 2; i <= 9; i++) {
        for (let j = 1; j <= 10; j++) {
            num = i * j;
            console.log(`${i} * ${j} = ${num}`)
        }
    }*/

// 12)???????????????????????????????????????????????????

    /*let year = +prompt('Введіть рік', 0);
    let month = +prompt('Введіть місяць', 0);
    let day = +prompt('Введіть день', 0);

    if ((day == 31 && month % 2 == 1) || (day == 30 && month % 2 == 0)) {
        day == 1;
        if (month < 12) {
            month += 1
        } else if (month == 12) {
            month == 1;
            year += 1;
        } else {
            alert('Невірно введений міцяць!')
        }
    } else if ((day < 31 && month % 2 == 1) || (day < 30 && month % 2 == 0)) {
        day += 1;
    } else {
        alert('Невірно введений день!')
    }

    alert('Наступна дата: ' + day + '.' + month + '.' + year + 'р.')*/







