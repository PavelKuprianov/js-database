//функция приведения имен в приемлемый вид
function valid(x) {

    let SN0 = x.charAt(0);
    let SN1 = SN0.toLocaleUpperCase();

    let SN2 = x.substr(1);
    let SN3 = SN2.toLocaleLowerCase();
    let word = SN1 + SN3;

    return word;

}

let section1 = document.createElement('section');
section1.classList.add('section1');

let titleTop = document.createElement('h2');
document.body.append(section1);
section1.append(titleTop);
titleTop.textContent = "Поле для ввода данных нового студента";

//let form = document.createElement('form');
//section1.append(form);

let divForm = document.createElement('div');
divForm.classList.add('section1__cotainer_form');

section1.append(divForm);

let labelSurname = document.createElement('label');
labelSurname.for = 'surName';
let inrutSurname = document.createElement('input');
inrutSurname.id = 'surName';
//inrutSurname.required = 'true';

divForm.append(labelSurname);
divForm.append(inrutSurname);

labelSurname.textContent = "Фамилия студента";


let labelName = document.createElement('label');
labelName.for = 'name';
let inrutName = document.createElement('input');
inrutName.id = 'name';
//inrutName.required = 'true';

divForm.append(labelName);
divForm.append(inrutName);

labelName.textContent = "Имя студента";


let labelPatronymic = document.createElement('label');
labelPatronymic.for = 'patronymic';
let inrutPatronymic = document.createElement('input');
inrutPatronymic.id = 'patronymic';
//inrutPatronymic.required = 'true';

divForm.append(labelPatronymic);
divForm.append(inrutPatronymic);

labelPatronymic.textContent = "Отчество студента";

let date = new Date();

let labelBirthday = document.createElement('label');
labelBirthday.for = 'birthday';
let inrutBirthday = document.createElement('input');
inrutBirthday.id = 'birthday';
inrutBirthday.type = 'date';
inrutBirthday.min = '1900-01-01';
inrutBirthday.max = '2010-01-01';
//inrutBirthday.required = 'true';

divForm.append(labelBirthday);
divForm.append(inrutBirthday);

labelBirthday.textContent = "Дата рождения студента";


let labelYear = document.createElement('label');
labelYear.for = 'year';
let inrutYear = document.createElement('input');
inrutYear.id = 'year';
inrutYear.type = 'date';
inrutYear.min = '2000-01-01';
inrutYear.max = '2020-12-31';
//inrutYear.required = 'true';

divForm.append(labelYear);
divForm.append(inrutYear);

labelYear.textContent = "Год поступления на учёбу";


let labelFaculty = document.createElement('label');
labelFaculty.for = 'faculty';
let inrutFaculty = document.createElement('input');
inrutFaculty.id = 'faculty';
//inrutFaculty.required = 'true';

divForm.append(labelFaculty);
divForm.append(inrutFaculty);

labelFaculty.textContent = "Наименование факультета";



let btn = document.createElement('button');
btn.classList.add('btn-outline-secondary');
btn.classList.add('btn');
divForm.append(btn);
btn.textContent = 'Добавить студента';


//Фильтры

let section3 = document.createElement('section');
section3.classList.add('section1');
let titleFiltr = document.createElement('h2');
document.body.append(section3);
section3.append(titleFiltr);
titleFiltr.textContent = "Фильтры";

let divFiltr = document.createElement('div');
section3.append(divFiltr);
divFiltr.classList.add('input-group', 'mb-3');

let inputFiltr = document.createElement('input');
inputFiltr.classList.add('form-control', 'filtr');
inputFiltr.type = 'text';
inputFiltr.id = 'myInput';
inputFiltr.placeholder = 'Введите имя, фамилию или отчество';

divFiltr.append(inputFiltr);



let buttonFiltr = document.createElement('button');
buttonFiltr.classList.add('btn', 'btn-outline-secondary');
buttonFiltr.type = "button";
buttonFiltr.id = "button-addon2";
buttonFiltr.textContent = 'Искать';

divFiltr.append(buttonFiltr);

let buttonReset = document.createElement('button');
buttonReset.classList.add('btn', 'btn-outline-secondary');
buttonReset.type = "reset";
buttonReset.id = "button-addon2";
buttonReset.textContent = 'Удалить фильтр';

divFiltr.append(buttonReset);

//Поиск по факультету

let divFiltrF = document.createElement('div');
section3.append(divFiltrF);
divFiltrF.classList.add('input-group', 'mb-3');

let inputFiltrF = document.createElement('input');
inputFiltrF.classList.add('form-control', 'filtr');
inputFiltrF.type = 'text';
inputFiltrF.id = 'myInputF';
inputFiltrF.placeholder = 'Введите название факультета';

divFiltrF.append(inputFiltrF);



let buttonFiltrF = document.createElement('button');
buttonFiltrF.classList.add('btn', 'btn-outline-secondary');
buttonFiltrF.type = "button";
buttonFiltrF.id = "button-addon2";
buttonFiltrF.textContent = 'Искать';

divFiltrF.append(buttonFiltrF);

let buttonResetF = document.createElement('button');
buttonResetF.classList.add('btn', 'btn-outline-secondary');
buttonResetF.type = "reset";
buttonResetF.id = "button-addon2";
buttonResetF.textContent = 'Удалить фильтр';

divFiltrF.append(buttonResetF);


//Поиск по году поступления

let divFiltrS = document.createElement('div');
section3.append(divFiltrS);
divFiltrS.classList.add('input-group', 'mb-3');

let inputFiltrS = document.createElement('input');
inputFiltrS.classList.add('form-control', 'filtr');
inputFiltrS.type = 'text';
inputFiltrS.id = 'myInputS';
inputFiltrS.placeholder = 'Введите год поступления';

divFiltrS.append(inputFiltrS);



let buttonFiltrS = document.createElement('button');
buttonFiltrS.classList.add('btn', 'btn-outline-secondary');
buttonFiltrS.type = "button";
buttonFiltrS.id = "button-addon2";
buttonFiltrS.textContent = 'Искать';

divFiltrS.append(buttonFiltrS);

let buttonResetS = document.createElement('button');
buttonResetS.classList.add('btn', 'btn-outline-secondary');
buttonResetS.type = "reset";
buttonResetS.id = "button-addon2";
buttonResetS.textContent = 'Удалить фильтр';

divFiltrS.append(buttonResetS);


//Поиск по году окончания

let divFiltrE = document.createElement('div');
section3.append(divFiltrE);
divFiltrE.classList.add('input-group', 'mb-3');

let inputFiltrE = document.createElement('input');
inputFiltrE.classList.add('form-control', 'filtr');
inputFiltrE.type = 'text';
inputFiltrE.id = 'myInputE';
inputFiltrE.placeholder = 'Введите год окончания ВУЗа';

divFiltrE.append(inputFiltrE);



let buttonFiltrE = document.createElement('button');
buttonFiltrE.classList.add('btn', 'btn-outline-secondary');
buttonFiltrE.type = "button";
buttonFiltrE.id = "button-addon2";
buttonFiltrE.textContent = 'Искать';

divFiltrE.append(buttonFiltrE);

let buttonResetE = document.createElement('button');
buttonResetE.classList.add('btn', 'btn-outline-secondary');
buttonResetE.type = "reset";
buttonResetE.id = "button-addon2";
buttonResetE.textContent = 'Удалить фильтр';

divFiltrE.append(buttonResetE);


//таблица результатов
let section2 = document.createElement('section');
section2.classList.add('section1');

let titleBottom = document.createElement('h2');
document.body.append(section2);
section2.append(titleBottom);
titleBottom.textContent = "База данных студентов";

let divTable = document.createElement('div');
divTable.classList.add('table__div');
section2.append(divTable);

let table = document.createElement('table');
table.classList.add('table');
table.id = 'myTable';
divTable.append(table);

let thead = document.createElement('thead');
thead.id = 'headTr';
table.append(thead);

let trH = document.createElement('tr');

thead.append(trH);



let th1 = document.createElement('th');
th1.classList.add('tableHead');
th1.setAttribute("data-sort", "num");

trH.append(th1);
th1.textContent = '#';

let th2 = document.createElement('th');
th2.classList.add('tableHead');
th2.setAttribute("data-sort", "fio");

trH.append(th2);
th2.textContent = 'Фамилия, имя, отчество';

let th3 = document.createElement('th');
th3.classList.add('tableHead');
th3.setAttribute("data-sort", "facult");

trH.append(th3);
th3.textContent = 'Факультет';

let th4 = document.createElement('th');
th4.classList.add('tableHead');
th4.setAttribute("data-sort", "dat");

trH.append(th4);
th4.textContent = 'Дата рождения';

let th5 = document.createElement('th');
th5.classList.add('tableHead');
trH.append(th5);
th5.textContent = 'Возраст';

let th6 = document.createElement('th');
th6.classList.add('tableHead');
th6.setAttribute("data-sort", "year");

trH.append(th6);
th6.textContent = 'Годы обучения';

let th7 = document.createElement('th');
th7.classList.add('tableHead');
trH.append(th7);
th7.textContent = 'Курс';

let tbody = document.createElement('tbody');
tbody.id = 'tbody';
table.append(tbody);





let arr = [];
let j = 0;
let name, surname, patronymic, SN, N, Patr, Bi, birt, Ye, Fac, Age, birtDay, month, year, entry, StartYear, startYear;
let EndYear, endYear, Course, course, faculty;


btn.addEventListener('click', function (e) {
    //e.preventDefault();

   

    // убираем лишние пробелы и приводим в порядок прописные и строчные буквы



    let SNsumm = document.getElementById('surName').value.trim();

    SN = valid(SNsumm);

    if (!SN) {
        alert ('Заполните поле с фамилией!');
        return 0;
    }

    let Nsumm = document.getElementById('name').value.trim();
    N = valid(Nsumm);

    if (!N) {
        alert ('Заполните поле с именем!');
        return 0;
    }

    let PatrSumm = document.getElementById('patronymic').value.trim();
    Patr = valid(PatrSumm);

    if (!Patr) {
        alert ('Вы не указали отчество!');
        return 0;
    }

    //получаем дату рождения студента
    birt = document.getElementById('birthday').value; //это строковая информация


    if (!birt) {
        alert ('Заполните поле с датой рождения!');
        return 0;
    }

    let birtYear = Number(birt.substr(0, 4)); //год рождения в цифре

    let birtMonth = Number(birt.substr(5, 2)); //месяц рождения в цифре


    let birtD = Number(birt.substr(8, 2)); //день рождения в цифре


    //получаем текущую дату
    let today = new Date();
    let todayD = today.getDate();
    let todayMonth = today.getMonth() + 1;
    let todayYear = today.getFullYear();


    //проверка на возраст с учетом сегодняшней даты
    let age;

    if (todayMonth - birtMonth < 0) {
        age = todayYear - birtYear - 1;
    } else {
        if (todayMonth - birtMonth > 0) {
            age = todayYear - birtYear;
        } else {
            if (todayMonth - birtMonth === 0) {
                if (todayD - birtD >= 0) {
                    age = todayYear - birtYear;
                } else {
                    age = todayYear - birtYear - 1;
                }
            };
        }
    }


    let entryYear = document.getElementById('year').value; //это строковая информация о начале учёбы

    if (!entryYear) {
        alert ('Заполните поле с датой начала обучения!');
        return 0;
    }

    let startYear = Number(entryYear.substr(0, 4)); //год начала учёбы в цифре

    let endYear = startYear + 4;


    let course = todayYear - startYear; // вычисляем курс
    if (course > 4) {
        course = "Закончил обучение"
    };


    Fac = document.getElementById('faculty').value.trim();

    let facul = valid(Fac);


    if (!facul) {
        alert ('Заполните поле с наименованием факультета!');
        return 0;
    }

    j += 1;

    let ObjStudebt = {
        number: j, surname: SN, name: N, patronymic: Patr, birtDay: birtD,
        month: birtMonth, year: birtYear, Age: age, entry: entryYear,
        StartYear: startYear, EndYear: endYear, Course: course, faculty: facul
    };


    arr.push(ObjStudebt);

    //очищаем поля ввода
    inrutSurname.value = '';
    inrutName.value = '';
    inrutPatronymic.value = '';
    inrutBirthday.value = '';
    inrutYear.value = '';
    inrutFaculty.value = '';

    let tr = document.createElement('tr');
    tbody.append(tr);

    tr.innerHTML =
        '<td>' + arr[j - 1].number + '</td>' +
        '<td>' + arr[j - 1].surname + ' ' + arr[j - 1].name + ' ' + arr[j - 1].patronymic + '</td>' +
        '<td>' + arr[j - 1].faculty + '</td>' +
        '<td>' + arr[j - 1].birtDay + '. ' + arr[j - 1].month + '. ' + arr[j - 1].year + '</td>' +
        '<td>' + arr[j - 1].Age + '</td>' +
        '<td>' + arr[j - 1].StartYear + ' - ' + arr[j - 1].EndYear + '</td>' +
        '<td>' + arr[j - 1].Course + '</td>';

    return arr;

})


// фильтрация по имени
buttonFiltr.addEventListener('click', function myFunction() {
    // Объявить переменные
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");


    filter = input.value.toUpperCase();


    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Перебирайте все строки таблицы и скрывайте тех, кто не соответствует поисковому запросу
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

})

//очищаем фильтр
buttonReset.addEventListener('click', function myReset() {

    let tr = table.getElementsByTagName("tr");

    document.getElementById("myInput").value = '';
    for (i = 0; i < tr.length; i++) {
        tr[i].style.display = "";
    }
})

//поиск для факультета

buttonFiltrF.addEventListener('click', function myFunctionF() {
    // Объявить переменные
    let inputF, filterF, table, tr, td, n, txtValue;
    inputF = document.getElementById("myInputF");

    filterF = inputF.value.toUpperCase();

    

    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Перебираем все строки таблицы и скрываем те, кто не соответствует поисковому запросу
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filterF) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

})

//очищаем фильтр
buttonResetF.addEventListener('click', function myResetF() {

    let tr = table.getElementsByTagName("tr");

    document.getElementById("myInputF").value = '';
    for (i = 0; i < tr.length; i++) {
        tr[i].style.display = "";
    }
})

//поиск для года поступления

buttonFiltrS.addEventListener('click', function myFunctionS() {
    // Объявить переменные
    let inputS, filterS, table, tr, td, n, txtValue, textT;
    inputS = document.getElementById("myInputS");

    snak = inputS.value; //получаем значение в поле поиска
    textT = ' -';

    filterS = snak + textT;

    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr"); //из таблицы получаем всю коллекцию, 

    // Перебираем все строки таблицы и скрываем те, кто не соответствует поисковому запросу
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[5];
        if (td) {
            txtValue = td.textContent || td.innerText;
            
            if (txtValue.indexOf(filterS) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

})

//очищаем фильтр
buttonResetS.addEventListener('click', function myResetS() {

    let tr = table.getElementsByTagName("tr");

    document.getElementById("myInputS").value = '';
    for (i = 0; i < tr.length; i++) {
        tr[i].style.display = "";
    }
})


//поиск для года окончания ВУЗа

buttonFiltrE.addEventListener('click', function myFunctionS() {
    // Объявить переменные
    let inputE, filterE, table, tr, td, n, txtValue, textT;
    inputE = document.getElementById("myInputE");

    snak = inputE.value; //получаем значение в поле поиска
    textT = '- ';

    filterE = textT + snak;

    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr"); //из таблицы получаем всю коллекцию, 

    // Перебираем все строки таблицы и скрываем те, кто не соответствует поисковому запросу
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[5];
        if (td) {
            txtValue = td.textContent || td.innerText;
            
            if (txtValue.indexOf(filterE) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

})

//очищаем фильтр
buttonResetE.addEventListener('click', function myResetE() {

    let tr = table.getElementsByTagName("tr");

    document.getElementById("myInputE").value = '';
    for (i = 0; i < tr.length; i++) {
        tr[i].style.display = "";
    }
})

//функция для фильтрования элементов по заголовку в таблице

thead.addEventListener('click', (e) => {

 

    if (e.target.classList.contains('tableHead')) {
        const orderedStudents = [];

console.log('???????????????');
        
       switch (e.target.getAttribute('data-sort')) {
        case ('num'):
            sortTable(0);
        break;

        case ('fio'):
            sortTable(1);
        break;

        case ('facult'):
            sortTable(2);
        break;

        case ('dat'):
            sortTable(4);
        break;

        case ('year'):
            sortTable(5);
        break;    
        
        default:
            break;
        } 
    }
        
});

//функция для сортировки таблицы по клику на заголовок
function sortTable(n) {
    let tableFiltr = document.getElementById('tbody');
    let trs = document.querySelectorAll('#tbody tr');
    let colonka = document.getElementById('headTr');
    
    console.log(trs);

    let sorted = [...trs].sort(function(a, b) {
        
        
        if(a.children[n].innerHTML >= b.children[n].innerHTML) {
            return 1;
        } else {
            return -1;
        }
    });

    tableFiltr.innerHTML = '';

    for (let tr of sorted) {
        tableFiltr.appendChild(tr);
    }
  }
