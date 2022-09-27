//Мінімум
// 1) Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), 
    //дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
    let years = +prompt('Якільки Вам років?', 0);

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
    } 

// 2)Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші 
  // (1 !, 2 @, 3 # і т. д).

    let num = +prompt('Введіть число від 0 до 9');

    switch(num) {
        case 0:
            alert('відповідний символ - )');
            break;
        case 1:
            alert('відповідний символ - !');
            break;
        case 2:
            alert('відповідний символ - @');
            break;
        case 3:
            alert('відповідний символ - #');
            break;
        case 4:
            alert('відповідний символ - $');
            break;
        case 5:
            alert('відповідний символ - %');
            break;
        case 6:
            alert('відповідний символ - ^');
            break;
        case 7:
            alert('відповідний символ - &');
            break;
        case 8:
            alert('відповідний символ - *');
            break;
        case 9:
            alert('відповідний символ - (');
            break;
    } 

// 3)Підрахуй суму всіх чисел в заданому користувачем діапазоні.

    let firstNum = +prompt('Введіть початок діапазону', 0);
    let secondNum = +prompt('Введіть кінець діапазону', 0);
    let sum = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        sum += i;
    }

    alert(`Сума діапазону ${sum}`)

//4) Запитай у користувача 2 числа і знайди найбільший спільний дільник.
    let a = +prompt('Введіть перше число');
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

    alert(`Найбільшим спільним дільником буде ${c}`)
        
//5) Запитай у користувача число і виведи всі дільники цього числа.
    let number = +prompt('Введіть число', 0);

    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            console.log(i)
        }
    }
    alert('Всі дільники виведені в консолі')

//Норма
// 6) Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
    let num1 = prompt('Введіть 5-ти розрядне число', '');

    if (num1[0] === num1[4] && num1[1] === num1[3] ) {
        alert('Це число ПАЛІНДРОМ!')
    } else {
        alert('Це НЕ паліндром')
    }

// 7)Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
    //від 200 до 300 - знижка буде 3%; 
    //від 300 до 500 - 5%;
    //від 500 і вище - 7%.
    let prise = prompt('Яка сума покупки, в грн.?', '');

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
    }

// 8) Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому 
   // також  порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо 
   // однієї змінної (не 10) для введення чисел користувачем.
    let numbers = '';
    for(let i = 1; i <= 10; i++) {
        let writedNum = prompt('Введіть число', 0)
        if (writedNum == 0 || writedNum.length <= 2 && +writedNum < 0 || +writedNum == parseInt(writedNum)) {
            numbers += writedNum;
        } else {
            alert('Число введене некоректно...')
        }
    }

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
        } else if (num == '-') {
            numWithMinus += 1
        } 
        if (+num % 2 == 0 && num !== '-' && +num !== 0) {
            numCouple += 1
        } else if (+num % 2 !== 0 && num !== '-') {
            numNotCouple +=1
        } 
    }


    alert(`Додатніх чисел ${numWithPlus - numWithMinus} шт.,
    Нулів ${numWithZero} шт., 
    Від'ємних ${numWithMinus} шт.,
    Числа парні ${numCouple} шт.,
    Числа непарні ${numNotCouple} шт.`); 

// 9) Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до 
    //тих пір, поки користувач натискає OK.
    
    let day = 'Понеділок';
    let anwer = confirm(`${day}. Хочеш побачити наступний день?`);
    while (day) {
        if (anwer) {
            day = 'Вівторок';
            anwer = confirm(`${day}. Хочеш побачити наступний день?`);
        } else {break}
        if (anwer) {
            day = 'Cереда';
            anwer = confirm(`${day}. Хочеш побачити наступний день?`);
        } else {break}
        if (anwer) {
            day = 'Четверг';
            anwer = confirm(`${day}. Хочеш побачити наступний день?`);
        } else {break}
        if (anwer) {
            day = 'Пятниця';
            anwer = confirm(`${day}. Хочеш побачити наступний день?`);
        } else {break}
        if (anwer) {
            day = 'Субота';
            anwer = confirm(`${day}. Хочеш побачити наступний день?`);
        } else {break}
        if (anwer) {
            day = 'Неділля';
            anwer = confirm(`${day}. Хочеш побачити наступний день?`);
        } else {break}
        if (anwer) {
            day = 'Понеділок';
            anwer = confirm(`${day}. Хочеш побачити наступний день?`);
        } else {break}
    } 

//Максимум
//10)Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його 
    //наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай 
    //у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. 
    //Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, 
    //то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N 
    //(буде корисним почитати про алгоритм: "бінарний пошук").

    let yourNumner = prompt('Загадайте число від 0 до 100')
    let low = 0;
    let high = 100;
    
    while (true) {
        let mid = Math.round((high + low) / 2);
        let question = prompt(`Ваше число >, <, чи = ${mid}?`);
        if (question == '=') {
            if (mid == yourNumner) {
                alert(`Ваше число ${mid}`)
                break
            } else {
                alert(`Ви можливо обманюєте...`)
                break
            }
        } else if (question == '<') {
            if (mid > yourNumner) {
                high = mid;
            } else {
                alert(`Невірний діапазон...`)
                break
            }
        } else if (question == '>') {
            if (mid < yourNumner) {
                low = mid;
            } else {
                alert(`Невірний діапазон...`)
                break
            }
        };
    }
    
// 11) Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
    let num2 = 0;

    for (let i = 2; i <= 9; i++) {
        for (let j = 1; j <= 10; j++) {
            num2 = i * j;
            console.log(`${i} * ${j} = ${num2}`)
        }
    }
    alert('Таблиця множення в консолі')

// 12)Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на 
    //наступний місяць, рік, а також високосний рік.

    let year = +prompt('Введіть рік', 0);
    let month = +prompt('Введіть місяць', 0);
    let day1 = +prompt('Введіть день', 0);

    if (month > 12) {
        alert('Місяць введенений некоректно')
    } else if (day1 < 30 && month != 2) {
        day1 += 1;
    } else if (day1 === 28 && month === 2) {
        day1 = 1;
        month += 1;
        if (year % 4 === 0) {
            day1 = 29;
            month = 2;
        }
    } else if (day1 === 30 && month % 2 === 0 || day1 === 31 && month % 2 === 1) {
        month += 1;
        day1 = 1;
    } else if (day1 === 31 && month === 12) {
        month = 1;
        year += 1;
        day1 = 1;
    } else {
        alert('День введенений некоректно')
    }

    alert('Наступна дата: ' + day1 + '.' + month + '.' + year + 'р.')







